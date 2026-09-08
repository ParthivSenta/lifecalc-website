import { Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import LegalPageLayout, { type TocItem } from '../components/layout/LegalPageLayout'
import PageLayout from '../components/layout/PageLayout'
import { SITE } from '../constants/site'

const TOC: TocItem[] = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'about', label: '2. About LifeCalc' },
  { id: 'educational-purpose', label: '3. Educational Purpose' },
  { id: 'no-advice', label: '4. No Financial Advice' },
  { id: 'projections', label: '5. Calculator Results & Projections' },
  { id: 'user-responsibility', label: '6. User Responsibility' },
  { id: 'no-guarantees', label: '7. No Guarantees' },
  { id: 'accuracy', label: '8. Accuracy and Availability' },
  { id: 'changes-features', label: '9. Changes to Features' },
  { id: 'acceptable-use', label: '10. Acceptable Use' },
  { id: 'intellectual-property', label: '11. Intellectual Property' },
  { id: 'third-party', label: '12. Third-Party Links' },
  { id: 'liability', label: '13. Limitation of Liability' },
  { id: 'warranties', label: '14. Disclaimer of Warranties' },
  { id: 'changes-service', label: '15. Changes to the Service' },
  { id: 'changes-terms', label: '16. Changes to These Terms' },
  { id: 'governing-law', label: '17. Governing Law' },
  { id: 'contact', label: '18. Contact Us' },
]

export default function TermsAndConditions() {
  return (
    <PageLayout title="Terms & Conditions — LifeCalc">
      <LegalPageLayout
        title="Terms & Conditions"
        lastUpdated={SITE.termsLastUpdated}
        toc={TOC}
      >
        {/* Financial Disclaimer callout */}
        <div className="bg-caution-soft rounded-[12px] border border-caution/15 p-4 mb-8 flex gap-3">
          <Info
            size={16}
            className="text-caution mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-sm text-ink-soft leading-relaxed">
            <strong className="text-foreground">Financial Disclaimer:</strong>{' '}
            LifeCalc provides financial calculations and estimates for
            informational purposes only. It does not provide financial,
            investment, tax, or legal advice.
          </p>
        </div>

        <section id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, accessing, or using LifeCalc (the "Application" or
            "Service"), you agree to these Terms &amp; Conditions ("Terms").
          </p>
          <p>
            If you do not agree with these Terms, you should not use the
            application.
          </p>
          <p>
            These Terms apply to all users of the Service. LifeCalc reserves
            the right to update these Terms. Continued use of the Service after
            changes are posted may constitute acceptance of the updated Terms
            where permitted by applicable law.
          </p>
        </section>

        <section id="about">
          <h2>2. About LifeCalc</h2>
          <p>
            LifeCalc provides financial calculators and planning tools designed
            to help users explore financial scenarios.
          </p>
          <p>
            Features may include calculations related to investments, savings,
            retirement planning, financial goals, and other financial
            projections.
          </p>
          <p>
            The application is intended to help users understand potential
            financial outcomes based on assumptions and information entered into
            the calculators.
          </p>
          <p>
            LifeCalc is not a bank, financial institution, registered investment
            advisor, broker, tax advisor, or legal advisor.
          </p>
        </section>

        <section id="educational-purpose">
          <h2>3. Educational and Informational Purpose</h2>
          <p>
            LifeCalc is provided for educational and informational purposes
            only.
          </p>
          <p>
            The calculations, estimates, projections, and other information
            provided by LifeCalc are intended to help users understand possible
            financial scenarios. They should not be relied upon as the sole
            basis for making financial decisions.
          </p>
          <p>
            Users are encouraged to consult qualified financial professionals
            before making significant financial decisions.
          </p>
        </section>

        <section id="no-advice">
          <h2>4. No Financial, Investment, Tax, or Legal Advice</h2>
          <p>
            LifeCalc does not provide financial, investment, tax, legal,
            accounting, or other professional advice.
          </p>
          <p>
            Nothing provided through the application should be interpreted as:
          </p>
          <ul>
            <li>A recommendation to buy or sell any investment</li>
            <li>Personalized investment advice</li>
            <li>A guarantee of financial performance</li>
            <li>Tax advice of any kind</li>
            <li>Legal advice of any kind</li>
            <li>A substitute for professional financial advice</li>
          </ul>
          <p>
            Users should consult a qualified and appropriately licensed
            professional before making significant financial decisions.
          </p>
        </section>

        <section id="projections">
          <h2>5. Calculator Results and Financial Projections</h2>
          <p>
            All calculator results and projections generated by LifeCalc are
            estimates.
          </p>
          <p>
            Results depend on assumptions, formulas, and information entered by
            the user. Actual financial outcomes may differ significantly from
            projected results due to factors including:
          </p>
          <ul>
            <li>Market performance</li>
            <li>Inflation and interest rates</li>
            <li>Investment returns</li>
            <li>Taxes, fees, and expenses</li>
            <li>Changes in income or personal circumstances</li>
            <li>Economic conditions</li>
            <li>Changes in laws or regulations</li>
          </ul>
          <p>
            LifeCalc does not guarantee that any projection, calculation, or
            estimated financial outcome will occur.
          </p>
        </section>

        <section id="user-responsibility">
          <h2>6. User Responsibility</h2>
          <p>
            Users are responsible for ensuring that the information entered into
            LifeCalc is accurate.
          </p>
          <p>
            Users are solely responsible for decisions made based on information
            obtained from the application.
          </p>
          <p>
            Before making important financial decisions, users should
            independently verify relevant information and seek professional
            advice where appropriate.
          </p>
        </section>

        <section id="no-guarantees">
          <h2>7. No Guarantees</h2>
          <p>LifeCalc does not guarantee:</p>
          <ul>
            <li>Investment returns</li>
            <li>Financial growth outcomes</li>
            <li>Retirement corpus or income outcomes</li>
            <li>Goal achievement</li>
            <li>Accuracy of future projections</li>
            <li>Suitability of calculations for individual circumstances</li>
          </ul>
          <p>
            Financial markets and personal circumstances can change, and future
            outcomes cannot be predicted with certainty.
          </p>
        </section>

        <section id="accuracy">
          <h2>8. Accuracy and Availability</h2>
          <p>
            We aim to provide useful and reasonably accurate calculation tools.
            However, we do not guarantee that:
          </p>
          <ul>
            <li>The application will always be error-free</li>
            <li>Calculations will be suitable for every user or circumstance</li>
            <li>Information will always be complete or current</li>
            <li>The application will always be available without interruption</li>
          </ul>
          <p>
            Users should independently verify important calculations before
            relying on them.
          </p>
        </section>

        <section id="changes-features">
          <h2>9. Changes to Calculators and Features</h2>
          <p>
            LifeCalc may modify, improve, add, suspend, or remove features at
            any time.
          </p>
          <p>
            Calculation methodologies, assumptions, and available features may
            change as the application evolves. Where significant changes affect
            how calculations are performed, reasonable efforts will be made to
            communicate relevant changes.
          </p>
        </section>

        <section id="acceptable-use">
          <h2>10. Acceptable Use</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Use LifeCalc for unlawful purposes</li>
            <li>Attempt unauthorized access to the application or its infrastructure</li>
            <li>Interfere with the application's operation or availability</li>
            <li>
              Reverse engineer or misuse the application except where permitted
              by applicable law
            </li>
            <li>
              Use the application in a way that may harm the service or other
              users
            </li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2>11. Intellectual Property</h2>
          <p>
            The LifeCalc name, branding, design, software, content, calculators,
            and other materials are protected by applicable intellectual property
            laws.
          </p>
          <p>
            Users may use LifeCalc for personal and lawful purposes in
            accordance with these Terms.
          </p>
          <p>
            Users may not copy, reproduce, distribute, or commercially exploit
            substantial portions of the application without permission, except
            where permitted by applicable law.
          </p>
        </section>

        <section id="third-party">
          <h2>12. Third-Party Links and Services</h2>
          <p>
            LifeCalc may occasionally provide links to third-party websites or
            services for reference purposes.
          </p>
          <p>
            We are not responsible for the content, availability, privacy
            practices, or policies of third-party services. Users should review
            the terms and privacy policies of any third-party services they
            choose to use.
          </p>
        </section>

        <section id="liability">
          <h2>13. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, LifeCalc and its
            developers shall not be liable for financial losses, investment
            losses, indirect damages, or other consequences arising from reliance
            on calculations, estimates, projections, or information provided by
            the application.
          </p>
          <p>
            Users acknowledge that financial decisions involve risk and that
            calculator outputs are estimates rather than guarantees.
          </p>
          <p>
            Nothing in these Terms is intended to exclude liability where
            liability cannot legally be excluded under applicable law.
          </p>
        </section>

        <section id="warranties">
          <h2>14. Disclaimer of Warranties</h2>
          <p>
            LifeCalc is provided on an "as is" and "as available" basis to the
            extent permitted by applicable law.
          </p>
          <p>
            We do not warrant uninterrupted availability, error-free operation,
            or fitness for a particular purpose beyond what is required by
            applicable law.
          </p>
        </section>

        <section id="changes-service">
          <h2>15. Changes to the Service</h2>
          <p>
            We may modify, update, suspend, or discontinue parts of LifeCalc
            from time to time. We are not obligated to maintain every feature
            permanently.
          </p>
        </section>

        <section id="changes-terms">
          <h2>16. Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions when necessary. When
            changes are made, the "Last Updated" date at the top of this page
            will be revised.
          </p>
          <p>
            Continued use of LifeCalc after updated Terms become effective may
            constitute acceptance of the revised Terms where permitted by
            applicable law.
          </p>
        </section>

        <section id="governing-law">
          <h2>17. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the applicable laws of{' '}
            <strong>[GOVERNING_JURISDICTION]</strong>.
          </p>
          <p>
            <em>
              Note: This placeholder must be updated with the correct legal
              jurisdiction before publishing.
            </em>
          </p>
        </section>

        <section id="contact">
          <h2>18. Contact Us</h2>
          <p>
            If you have questions regarding these Terms &amp; Conditions, please
            contact us:
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
            </li>
            <li>
              Via our <Link to="/contact">Contact page</Link>
            </li>
          </ul>
        </section>
      </LegalPageLayout>
    </PageLayout>
  )
}
