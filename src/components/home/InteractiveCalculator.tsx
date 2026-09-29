import { useState, useId } from 'react'
import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

type CalculatorTab = 'sip' | 'lumpsum' | 'retirement'

function formatINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '₹0'
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(2)} Cr`
  }
  if (val >= 100000) {
    return `₹${(val / 100000).toFixed(2)} Lakhs`
  }
  return `₹${Math.round(val).toLocaleString('en-IN')}`
}

function formatRawINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '₹0'
  return `₹${Math.round(val).toLocaleString('en-IN')}`
}

export default function InteractiveCalculator() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('sip')

  // ── SIP inputs (Exact app V1) ─────────────────────────────────────────────
  const [monthlySip, setMonthlySip] = useState(10000)
  const [sipReturnRate, setSipReturnRate] = useState(12)
  const [sipYears, setSipYears] = useState(15)
  const [annualStepUp, setAnnualStepUp] = useState(0) // optional step-up

  // ── Lump Sum inputs (Exact app V1) ────────────────────────────────────────
  const [lumpSumAmount, setLumpSumAmount] = useState(200000)
  const [lumpSumRate, setLumpSumRate] = useState(12)
  const [lumpSumYears, setLumpSumYears] = useState(15)

  // ── Retirement inputs (Exact app V1) ──────────────────────────────────────
  const [currentAge, setCurrentAge] = useState(30)
  const [retireAge, setRetireAge] = useState(60)
  const [lifeExpectancy, setLifeExpectancy] = useState(85)
  const [monthlyExpense, setMonthlyExpense] = useState(50000)
  const [currentSavings, setCurrentSavings] = useState(1000000)
  const [inflationRate, setInflationRate] = useState(6)
  const [preReturn, setPreReturn] = useState(12)
  const [postReturn, setPostReturn] = useState(8)

  // ── SIP Calculation (V1 formula from app) ──────────────────────────────────
  const sipMonths = Math.round(sipYears * 12)
  const sipMonthlyRate = sipReturnRate / 100 / 12

  let sipMaturity = 0
  let sipInvested = 0

  if (annualStepUp > 0) {
    let balance = 0
    let totalInvested = 0
    let month = 1
    for (let year = 1; year <= Math.max(sipYears, 0); year++) {
      const monthlyAmount = Math.round(monthlySip * Math.pow(1 + annualStepUp / 100, year - 1))
      for (let m = 0; m < 12 && month <= sipMonths; m++, month++) {
        balance = (balance + monthlyAmount) * (1 + sipMonthlyRate)
        totalInvested += monthlyAmount
      }
      if (month > sipMonths) break
    }
    sipMaturity = balance
    sipInvested = totalInvested
  } else {
    // Annuity-due: monthly * [((1 + i)^n - 1) / i] * (1 + i)
    sipMaturity =
      sipMonthlyRate === 0
        ? monthlySip * sipMonths
        : monthlySip * ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) * (1 + sipMonthlyRate)
    sipInvested = monthlySip * sipMonths
  }
  const sipGains = Math.max(0, sipMaturity - sipInvested)

  // ── Lump Sum Calculation (V1 formula from app) ────────────────────────────
  // Compounded yearly (periodsPerYear = 1): A = p * (1 + r)^t
  const lumpSumTotalPeriods = Math.round(lumpSumYears * 1)
  const lumpSumPeriodicRate = lumpSumRate / 100 / 1
  const lumpSumMaturity = lumpSumAmount * Math.pow(1 + lumpSumPeriodicRate, lumpSumTotalPeriods)
  const lumpSumGains = Math.max(0, lumpSumMaturity - lumpSumAmount)

  // ── Retirement Calculation (5-Step V1 formula from app) ───────────────────
  // Step 1: Timeline
  const yearsToRetirement = Math.max(retireAge - currentAge, 0)
  const retirementSpan = Math.max(lifeExpectancy - retireAge, 0)
  const N = Math.round(yearsToRetirement * 12)

  // Step 2: Future Monthly Expense
  const inflation = inflationRate / 100
  const retirementExpense = monthlyExpense * Math.pow(1 + inflation, yearsToRetirement)
  const annualExpenseAtRetirement = retirementExpense * 12

  // Step 3: Required Corpus (Present Value of Annuity using Real Return)
  const realReturn = (1 + postReturn / 100) / (1 + inflation) - 1
  const requiredCorpus =
    realReturn === 0
      ? annualExpenseAtRetirement * retirementSpan
      : (annualExpenseAtRetirement * (1 - Math.pow(1 + realReturn, -retirementSpan))) / realReturn

  // Step 4: Future Value of Current Savings
  const fvSavings = currentSavings * Math.pow(1 + preReturn / 100, yearsToRetirement)

  // Step 5: Required Monthly SIP (Annuity-due)
  const corpusGap = Math.max(requiredCorpus - fvSavings, 0)
  const r = preReturn / 100 / 12
  const compoundFactor = Math.pow(1 + r, N)
  const requiredSip =
    corpusGap <= 0 || N <= 0
      ? 0
      : r === 0
      ? corpusGap / N
      : corpusGap / (((compoundFactor - 1) / r) * (1 + r))

  // ── Active Tab Display Mapping ───────────────────────────────────────────
  let displayHeadlineLabel = 'Your investment could grow to'
  let displayHeadlineNumber = sipMaturity
  let displayInvested = sipInvested
  let displayGains = sipGains
  let investedPercent = 50
  let gainPercent = 50

  if (activeTab === 'sip') {
    displayHeadlineLabel = 'Your investment could grow to'
    displayHeadlineNumber = sipMaturity
    displayInvested = sipInvested
    displayGains = sipGains
    investedPercent = Math.min(100, Math.max(0, Math.round((sipInvested / sipMaturity) * 100))) || 50
    gainPercent = 100 - investedPercent
  } else if (activeTab === 'lumpsum') {
    displayHeadlineLabel = 'Value at the end'
    displayHeadlineNumber = lumpSumMaturity
    displayInvested = lumpSumAmount
    displayGains = lumpSumGains
    investedPercent = Math.min(100, Math.max(0, Math.round((lumpSumAmount / lumpSumMaturity) * 100))) || 50
    gainPercent = 100 - investedPercent
  } else {
    // Retirement tab
    displayHeadlineLabel = 'Required Monthly SIP'
    displayHeadlineNumber = requiredSip
    displayInvested = fvSavings
    displayGains = corpusGap
    const totalGoal = requiredCorpus || 1
    investedPercent = Math.min(100, Math.max(0, Math.round((fvSavings / totalGoal) * 100)))
    gainPercent = 100 - investedPercent
  }

  return (
    <section id="calculator" className="bg-background py-16 sm:py-20 lg:py-24 scroll-mt-14" aria-labelledby="calculator-heading">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-brand-soft text-brand text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles size={13} />
            Live App Engine
          </div>
          <SectionHeading
            as="h2"
            title="Try It Free: Calculate Your Financial Growth"
            description="Powered by the exact same mathematical formulas running inside the LifeCalc mobile app. Test your numbers below with instant feedback."
          />
        </div>

        {/* Tab selection */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-surface border border-border shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('sip')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sip'
                  ? 'bg-brand text-on-brand shadow-sm'
                  : 'text-ink-soft hover:text-foreground'
              }`}
            >
              SIP / Monthly
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lumpsum')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'lumpsum'
                  ? 'bg-brand text-on-brand shadow-sm'
                  : 'text-ink-soft hover:text-foreground'
              }`}
            >
              Lump Sum
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('retirement')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'retirement'
                  ? 'bg-brand text-on-brand shadow-sm'
                  : 'text-ink-soft hover:text-foreground'
              }`}
            >
              Retirement Planner
            </button>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-surface rounded-3xl border border-border p-6 sm:p-8 lg:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Inputs Column */}
            <div className="lg:col-span-6 space-y-6">
              {activeTab === 'sip' && (
                <>
                  <SliderRow
                    label="Monthly Investment"
                    value={monthlySip}
                    displayValue={formatRawINR(monthlySip)}
                    min={1000}
                    max={100000}
                    step={500}
                    onChange={setMonthlySip}
                  />
                  <SliderRow
                    label="Expected Annual Return Rate"
                    value={sipReturnRate}
                    displayValue={`${sipReturnRate}%`}
                    min={4}
                    max={25}
                    step={0.5}
                    onChange={setSipReturnRate}
                  />
                  <SliderRow
                    label="Investment Duration (Years)"
                    value={sipYears}
                    displayValue={`${sipYears} Years`}
                    min={1}
                    max={35}
                    step={1}
                    onChange={setSipYears}
                  />
                  <SliderRow
                    label="Annual Step-Up (%)"
                    value={annualStepUp}
                    displayValue={`${annualStepUp}%`}
                    min={0}
                    max={25}
                    step={1}
                    onChange={setAnnualStepUp}
                  />
                </>
              )}

              {activeTab === 'lumpsum' && (
                <>
                  <SliderRow
                    label="Total Initial Investment"
                    value={lumpSumAmount}
                    displayValue={formatRawINR(lumpSumAmount)}
                    min={10000}
                    max={2000000}
                    step={10000}
                    onChange={setLumpSumAmount}
                  />
                  <SliderRow
                    label="Expected Annual Return Rate"
                    value={lumpSumRate}
                    displayValue={`${lumpSumRate}%`}
                    min={4}
                    max={25}
                    step={0.5}
                    onChange={setLumpSumRate}
                  />
                  <SliderRow
                    label="Investment Duration (Years)"
                    value={lumpSumYears}
                    displayValue={`${lumpSumYears} Years`}
                    min={1}
                    max={35}
                    step={1}
                    onChange={setLumpSumYears}
                  />
                </>
              )}

              {activeTab === 'retirement' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <SliderRow
                      label="Current Age"
                      value={currentAge}
                      displayValue={`${currentAge} yrs`}
                      min={18}
                      max={55}
                      step={1}
                      onChange={setCurrentAge}
                    />
                    <SliderRow
                      label="Retirement Age"
                      value={retireAge}
                      displayValue={`${retireAge} yrs`}
                      min={Math.max(currentAge + 1, 40)}
                      max={75}
                      step={1}
                      onChange={setRetireAge}
                    />
                  </div>

                  <SliderRow
                    label="Current Monthly Expenses"
                    value={monthlyExpense}
                    displayValue={formatRawINR(monthlyExpense)}
                    min={15000}
                    max={250000}
                    step={5000}
                    onChange={setMonthlyExpense}
                  />

                  <SliderRow
                    label="Current Existing Savings"
                    value={currentSavings}
                    displayValue={formatINR(currentSavings)}
                    min={0}
                    max={5000000}
                    step={50000}
                    onChange={setCurrentSavings}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <SliderRow
                      label="Inflation Rate"
                      value={inflationRate}
                      displayValue={`${inflationRate}%`}
                      min={3}
                      max={12}
                      step={0.5}
                      onChange={setInflationRate}
                    />
                    <SliderRow
                      label="Pre-Retire Return"
                      value={preReturn}
                      displayValue={`${preReturn}%`}
                      min={6}
                      max={18}
                      step={0.5}
                      onChange={setPreReturn}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <SliderRow
                      label="Life Expectancy"
                      value={lifeExpectancy}
                      displayValue={`${lifeExpectancy} yrs`}
                      min={Math.max(retireAge + 1, 70)}
                      max={100}
                      step={1}
                      onChange={setLifeExpectancy}
                    />
                    <SliderRow
                      label="Post-Retire Return"
                      value={postReturn}
                      displayValue={`${postReturn}%`}
                      min={4}
                      max={14}
                      step={0.5}
                      onChange={setPostReturn}
                    />
                  </div>
                </>
              )}

              {/* Explanatory notes matching app */}
              <div className="pt-2 text-xs text-muted flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                <p>
                  {activeTab === 'sip' &&
                    (annualStepUp > 0
                      ? `Compounded monthly with a ${annualStepUp}% yearly step-up increase.`
                      : 'Compounded monthly (annuity-due) with contributions at the start of each month.')}
                  {activeTab === 'lumpsum' && 'Compounded once a year with single one-time contribution.'}
                  {activeTab === 'retirement' &&
                    `Step 1: ${yearsToRetirement} yrs to retirement. Step 2: Expense at age ${retireAge} ≈ ${formatINR(
                      retirementExpense,
                    )}/mo. Step 3: Required Corpus ≈ ${formatINR(requiredCorpus)}.`}
                </p>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 bg-field-bg rounded-2xl p-6 sm:p-7 border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-xs uppercase font-bold text-muted tracking-wider">
                    {displayHeadlineLabel}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-positive bg-positive-soft px-2.5 py-1 rounded-full">
                    <TrendingUp size={13} />
                    {activeTab === 'sip' && `+${((sipGains / sipInvested) * 100).toFixed(0)}% Profit`}
                    {activeTab === 'lumpsum' && `+${((lumpSumGains / lumpSumAmount) * 100).toFixed(0)}% Profit`}
                    {activeTab === 'retirement' && `${yearsToRetirement} yrs to save`}
                  </div>
                </div>

                {/* Big Main Result Number */}
                <div className="mt-4 mb-5">
                  <p className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    {formatINR(displayHeadlineNumber)}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    Exact calculation: <span className="font-semibold text-foreground">{formatRawINR(displayHeadlineNumber)}</span>
                    {activeTab === 'retirement' && ' / month'}
                  </p>
                </div>

                {/* Ratio Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-brand/30 inline-block" />
                      {activeTab === 'retirement' ? 'Funded by Savings' : 'Amount Invested'} ({investedPercent}%)
                    </span>
                    <span className="text-positive font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-brand inline-block" />
                      {activeTab === 'retirement' ? 'Corpus to Build' : 'Estimated Growth'} ({gainPercent}%)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-border rounded-full overflow-hidden flex">
                    <div
                      className="bg-brand/30 h-full transition-all duration-300"
                      style={{ width: `${investedPercent}%` }}
                    />
                    <div
                      className="bg-brand h-full transition-all duration-300"
                      style={{ width: `${gainPercent}%` }}
                    />
                  </div>
                </div>

                {/* Detail Metrics Breakdown */}
                {activeTab === 'retirement' ? (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Required Corpus</p>
                      <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                        {formatINR(requiredCorpus)}
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Corpus to Build</p>
                      <p className="text-sm sm:text-base font-bold text-positive mt-0.5">
                        {formatINR(corpusGap)}
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Expense at Retirement</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">
                        {formatRawINR(retirementExpense)}/mo
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Savings at Retirement</p>
                      <p className="text-sm font-bold text-foreground mt-0.5">
                        {formatINR(fvSavings)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Total Invested</p>
                      <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                        {formatINR(displayInvested)}
                      </p>
                    </div>
                    <div className="bg-surface rounded-xl p-3 border border-border">
                      <p className="text-[11px] text-muted font-medium">Estimated Growth</p>
                      <p className="text-sm sm:text-base font-bold text-positive mt-0.5">
                        +{formatINR(displayGains)}
                      </p>
                    </div>
                  </div>
                )}

                {/* SVG Curve */}
                <div className="relative h-20 w-full overflow-hidden rounded-xl bg-surface/60 border border-border/50 p-2">
                  <svg viewBox="0 0 300 60" fill="none" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="calcCurveGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00786C" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#00786C" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 56 Q80 54 150 38 T300 4"
                      stroke="#00786C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 56 Q80 54 150 38 T300 4 L300 60 L0 60 Z"
                      fill="url(#calcCurveGrad2)"
                    />
                    <circle cx="300" cy="4" r="3.5" fill="#00786C" />
                  </svg>
                </div>
              </div>

              {/* Teaser CTA */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted">Want breakdown tables and custom reports?</span>
                <a
                  href="#download"
                  className="font-semibold text-brand hover:underline inline-flex items-center gap-1"
                >
                  Download LifeCalc <ArrowRight size={13} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

function SliderRow({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  displayValue: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  const id = useId()
  const percent = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={id} className="text-xs font-semibold text-ink-soft cursor-pointer">
          {label}
        </label>
        <span className="text-xs sm:text-sm font-bold text-foreground bg-field-bg border border-border px-2.5 py-0.5 rounded-lg shadow-2xs">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-slider"
        style={{
          background: `linear-gradient(to right, #00786C 0%, #00786C ${percent}%, #DAE5E5 ${percent}%, #DAE5E5 100%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-muted mt-1 font-medium select-none">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
