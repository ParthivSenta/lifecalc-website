import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import LegalPageLayout, { type TocItem } from '../components/layout/LegalPageLayout'
import PageLayout from '../components/layout/PageLayout'
import { SITE } from '../constants/site'

const TOC: TocItem[] = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'no-collection', label: '2. Information We Do Not Collect' },
  { id: 'local-processing', label: '3. Calculator Data & Local Processing' },
  { id: 'data-storage', label: '4. Data Storage' },
  { id: 'permissions', label: '5. Permissions' },
  { id: 'third-party', label: '6. Third-Party Services' },
  { id: 'data-sharing', label: '7. Data Sharing and Selling' },
  { id: 'security', label: '8. Data Security' },
  { id: 'childrens-privacy', label: "9. Children's Privacy" },
  { id: 'your-choices', label: '10. Your Choices & Data Control' },
  { id: 'account-deletion', label: '11. Account & Data Deletion' },
  { id: 'changes', label: '12. Changes to This Policy' },
  { id: 'contact', label: '13. Contact Us' },
]

const GLANCE_ITEMS = [
  'No account required to use LifeCalc',
  'No personal data collected',
  'No advertising tracking or ad networks',
  'Calculator data processed locally on your device',
  'No sale or sharing of personal data',
]

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy — LifeCalc">
      <LegalPageLayout
        title="Privacy Policy"
        lastUpdated={SITE.privacyLastUpdated}
        toc={TOC}
      >
        {/* Privacy at a Glance */}
        <div className="bg-brand-soft rounded-[16px] border border-brand-tint p-5 mb-8">
          <p className="text-sm font-semibold text-brand-deep mb-3">
            Privacy at a Glance
          </p>
          <ul className="space-y-2.5" role="list">
            {GLANCE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={15}
                  className="text-brand mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-brand-deep/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>
            LifeCalc respects your privacy. This Privacy Policy explains how
            LifeCalc handles information when you use our mobile application and
            related website (collectively, the "Service").
          </p>
          <p>
            LifeCalc is designed as a financial calculation and planning tool.
            We aim to provide useful financial calculators without requiring
            users to provide unnecessary personal information.
          </p>
          <p>
            If you have questions about this policy, please{' '}
            <Link to="/contact">contact us</Link>.
          </p>
        </section>

        <section id="no-collection">
          <h2>2. Information We Do Not Collect</h2>
          <p>
            LifeCalc does not collect, transmit, or store personal information
            on our servers. We do not collect information such as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Home address</li>
            <li>Precise location</li>
            <li>Contacts</li>
            <li>Financial account credentials</li>
            <li>Bank account information</li>
            <li>Credit or debit card information</li>
            <li>Government identification information</li>
            <li>Advertising identifiers</li>
            <li>Browsing history</li>
            <li>Personal usage analytics</li>
          </ul>
          <p>
            LifeCalc does not require users to create an account to use the
            core calculator features of the application.
          </p>
        </section>

        <section id="local-processing">
          <h2>3. Calculator Data and Local Processing</h2>
          <p>
            The financial values you enter into LifeCalc calculators are used
            to perform calculations and generate projections for your personal
            use.
          </p>
          <p>
            <strong>Calculations are performed locally on your device.</strong>{' '}
            LifeCalc does not transmit your calculator inputs or calculation
            results to LifeCalc servers.
          </p>
          <p>
            Calculator results are estimates generated based on the information
            and assumptions you provide. They are not guaranteed outcomes and
            should not be treated as financial advice.
          </p>
          <p>
            Where the application provides local saving functionality, saved
            information remains on your device and is not transmitted to or
            stored by LifeCalc.
          </p>
        </section>

        <section id="data-storage">
          <h2>4. Data Storage</h2>
          <p>
            LifeCalc does not operate a server for storing users' personal
            financial calculator information.
          </p>
          <p>
            Any calculator preferences, saved values, or application settings
            that the application stores are kept locally on your device. This
            data is not accessible to LifeCalc.
          </p>
          <p>
            You can remove locally stored application data by using any
            available reset functionality within the application, clearing
            application storage through your device settings, or uninstalling
            the application.
          </p>
        </section>

        <section id="permissions">
          <h2>5. Permissions</h2>
          <p>
            LifeCalc only requests device permissions that are necessary for
            specific application functionality.
          </p>
          <p>
            LifeCalc does not request access to sensitive device features such
            as your contacts, camera, microphone, precise location, or photos
            and media.
          </p>
          <p>
            If the application requires any permissions, they will be relevant
            to providing the calculator and planning functionality and will be
            disclosed when requested by the application.
          </p>
        </section>

        <section id="third-party">
          <h2>6. Third-Party Services</h2>
          <p>
            LifeCalc does not use third-party advertising or analytics services
            to track users.
          </p>
          <p>
            If this changes in the future, this Privacy Policy will be updated
            before any such services are introduced. Users are encouraged to
            review this policy periodically.
          </p>
          <p>
            The LifeCalc website may be hosted using standard web infrastructure
            services. Standard server-level logs (such as access logs maintained
            by hosting providers) may be created as a routine part of web server
            operation. LifeCalc does not control or actively use these logs for
            user tracking purposes.
          </p>
        </section>

        <section id="data-sharing">
          <h2>7. Data Sharing and Selling</h2>
          <p>
            Because LifeCalc does not collect personal information, we do not
            sell, rent, trade, or share personal information with third parties
            for advertising or marketing purposes.
          </p>
          <p>
            We do not use user information for targeted advertising. We do not
            operate an advertising network.
          </p>
        </section>

        <section id="security">
          <h2>8. Data Security</h2>
          <p>
            LifeCalc is designed to minimize privacy risks by limiting
            unnecessary data collection.
          </p>
          <p>
            Because LifeCalc does not collect or store personal user information
            on our servers, there is no centralized database of users' personal
            financial calculator data maintained by LifeCalc.
          </p>
          <p>
            Users are responsible for maintaining the security of their own
            devices, including protecting any locally saved application data.
          </p>
        </section>

        <section id="childrens-privacy">
          <h2>9. Children's Privacy</h2>
          <p>
            LifeCalc is not specifically directed toward children under the age
            of 13.
          </p>
          <p>
            Because LifeCalc does not collect personal information from users,
            we do not knowingly collect personal information from children.
          </p>
          <p>
            If you believe that a child has provided personal information
            through a support communication or other external channel, please{' '}
            <Link to="/contact">contact us</Link> and we will take appropriate
            steps to address it.
          </p>
        </section>

        <section id="your-choices">
          <h2>10. Your Choices and Data Control</h2>
          <p>
            Because LifeCalc does not require an account and does not maintain
            a central database of personal user information, you generally
            retain full control over any information stored locally on your
            device.
          </p>
          <p>Where local application data is stored, you may remove it by:</p>
          <ul>
            <li>Using available reset or clear-data features within the application</li>
            <li>Clearing application storage through your device settings</li>
            <li>Uninstalling the LifeCalc application</li>
          </ul>
        </section>

        <section id="account-deletion">
          <h2>11. Account and Data Deletion</h2>
          <p>
            LifeCalc does not require users to create an account for its core
            functionality. Therefore, there may be no account associated with
            your use of the application to delete.
          </p>
          <p>
            If locally stored application data exists on your device, you can
            remove it by clearing application data through your device settings
            or by uninstalling the application.
          </p>
          <p>
            For more information, see our{' '}
            <Link to="/delete-account">Account &amp; Data Deletion</Link> page.
          </p>
        </section>

        <section id="changes">
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in the application, legal requirements, or privacy
            practices.
          </p>
          <p>
            When changes are made, we will update the "Last Updated" date at
            the top of this page. We encourage users to review this Privacy
            Policy periodically.
          </p>
          <p>
            Continued use of the Service after changes are posted indicates
            your awareness of the updated policy.
          </p>
        </section>

        <section id="contact">
          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or LifeCalc's
            privacy practices, please contact us:
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
          <p>We will respond to your inquiry within a reasonable timeframe.</p>
        </section>
      </LegalPageLayout>
    </PageLayout>
  )
}
