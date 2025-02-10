import type { Metadata } from "next"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Figma Community Clone",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Our privacy policy outlines how we collect, use, and protect your information
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h5 className="text-2xl font-semibold mb-4">Date: 2024-12-16</h5>
              <p className="text-muted-foreground">
                This Privacy Policy (“Policy”) of the Lucey Foundation provides our privacy policy regarding the nature,
                purpose, use, and sharing of personal data or other information collected from the users of the website
                www.lucey.ai and other websites which use subdomains of www.lucey.ai (the "Site"). We are committed to
                protecting and respecting your privacy. Please read this carefully as this Privacy Policy is legally
                binding when you use the Site. Any terms not defined herein shall have the meaning given to such terms
                in our Terms of Service which can be found at www.lucey.ai/terms. Please read this Privacy Policy
                carefully to understand our policies and practices regarding your information and how we will treat it.
                IF YOU ARE UNWILLING TO AGREE TO THIS PRIVACY POLICY, OR YOU DO NOT HAVE THE RIGHT, POWER AND AUTHORITY
                TO ACT ON BEHALF OF AND BIND THE BUSINESS, ORGANIZATION, OR OTHER ENTITY YOU REPRESENT, DO NOT ACCESS OR
                OTHERWISE USE THE SITE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to this Agreement</h2>
              <p className="text-muted-foreground">
                We reserve the exclusive right to make changes to this Privacy Policy from time to time, in our sole
                discretion. Your continued access to and use of the Site constitutes your agreement to be bound by
                specific terms of this Privacy Policy posted at such time. You acknowledge and agree that you accept
                this Privacy Policy (and any amendments hereto) each time you access the Site in any manner. Therefore,
                we encourage you to review this Privacy Policy regularly as you shall be bound by it. If, within thirty
                (30) days of us posting changes or amendments to this Privacy Policy, you decide that you do not agree
                to the updated terms of the Privacy Policy, you may provide us with written notice of your withdrawal
                from this Privacy Policy to the email address at legal@lucey.ai. Upon providing us with the written
                notice of the withdrawal of your acceptance to this Privacy Policy, you shall no longer be authorized to
                access or use the Site, and you must immediately cease in doing so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                Age: By accessing our using the Site, you represent and warrant that you are at least eighteen (18)
                years of age. If you are under the age of eighteen (18), you may not, under any circumstances or for any
                reason, use the Site. Legality: You are solely responsible for ensuring that this Privacy Policy is in
                compliance with all laws, rules, and regulations applicable to you and in your jurisdiction. If your use
                of the Site, or any functionality provided or activity enabled thereby, is prohibited or conflicts with
                any applicable law, rule or regulation, you may not, under any circumstances or for any reason, use the
                Site. Criteria: We may, in our sole discretion, refuse to offer the Site to any person or entity and
                change the eligibility criteria for use thereof at any time. Applicability: This Privacy Policy applies
                to all of your interactions with us via the Site, and your interactions with us in connection therewith.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Types of information we may collect</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent possible, we try to collect as minimum as possible personal information from you.
                Personal Information we may collect (“Personal Information”) includes: Email address, your name and any
                other your Personal Information you provide to Us when communicating with us. Such Personal Information
                is used only for communication with you; IP address, MAC address, cookie identifiers, domain server,
                data related to usage, performance, site security, traffic patterns, location information, browser and
                device information only when you are using our services at our Site; We may also receive information
                about you from other sources, including through third-party services and organizations. For example, if
                you access third-party services, through the Sites, we may collect information from these third-party
                services.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use of cookies and similar technologies</h2>
              <p className="text-muted-foreground mb-4">
                As mentioned above, the Site may use cookies. Cookies are small text files that are placed on your
                computer by websites that you visit. They are widely used in order to make websites work, or work more
                efficiently, as well as to provide information to the owners of the site. Cookies are typically stored
                on your computer's hard drive. Information collected from cookies is used by us to evaluate the
                effectiveness of our Site and analyze trends. The information collected from cookies allows us to
                determine such things as which parts of the Site are most visited and difficulties our visitors may
                experience in accessing the Site. With this knowledge, we can improve the quality of your experience on
                the Site by recognizing and delivering more of the most desired features and information, as well as by
                resolving access difficulties. We use third party service providers, to assist us in better
                understanding the use of our Site. Our service providers will place cookies on the hard drive of your
                computer (or use similar technologies) and will receive information that we select that will educate us
                on such things as how visitors navigate around our Site. This information is aggregated to provide
                statistical data about our users' browsing actions and patterns, and does not personally identify
                individuals (however, see below information on Ethereum wallet addresses). This information may also
                include: Computer or mobile device information, Website usage information, such as: Page views, Account
                changes (i.e. connecting a wallet), Button clicks, Input form changes (without the values being
                tracked), Errors. Our service providers analyse this information and provide us with aggregate reports.
                The information and analysis provided by our service providers will be used to assist us in better
                understanding our visitors' interests in our Site and how to better serve those interests, as well as
                help ensure secure use of the website for all users. If you want to avoid using cookies altogether, you
                can disable cookies in your browser. However, disabling cookies might make it impossible for you to use
                certain features of the Site. Your use of the Site with a browser that is configured to accept cookies
                constitutes acceptance of our and third-party cookies.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Blockchain Data</h2>
              <p className="text-muted-foreground mb-4">
                As mentioned above, the Site may use cookies. Cookies are small text files that are placed on your
                computer by websites that you visit. They are widely used in order to make websites work, or work more
                efficiently, as well as to provide information to the owners of the site. Cookies are typically stored
                on your computer's hard drive. Information collected from cookies is used by us to evaluate the
                effectiveness of our Site and analyze trends. The information collected from cookies allows us to
                determine such things as which parts of the Site are most visited and difficulties our visitors may
                experience in accessing the Site. With this knowledge, we can improve the quality of your experience on
                the Site by recognizing and delivering more of the most desired features and information, as well as by
                resolving access difficulties. We use third party service providers, to assist us in better
                understanding the use of our Site. Our service providers will place cookies on the hard drive of your
                computer (or use similar technologies) and will receive information that we select that will educate us
                on such things as how visitors navigate around our Site. This information is aggregated to provide
                statistical data about our users' browsing actions and patterns, and does not personally identify
                individuals (however, see below information on Ethereum wallet addresses). This information may also
                include: We use public Ethereum addresses to identify a user’s journey through our Interface. We group
                and analyze these user journeys collectively in order to provide adequate security for our users and to
                improve our overall App user experience. Note that we are not responsible for your use of the Ethereum
                blockchain and your data processed in this decentralized and permissionless network.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclosure of Data</h2>
              <p className="text-muted-foreground">
                We may disclose any information about you: to the extent required by law or if we have a good-faith
                belief that such disclosure is necessary in order to comply with official investigations or legal
                proceedings initiated by governmental and/or law enforcement officials, or private parties, including
                but not limited to: in response to subpoenas, search warrants, or court orders; in connection with a
                merger, division, restructuring, or other association change; or to our subsidiaries or affiliates only
                if necessary for operational purposes. If we must disclose any of your Personal Information in order to
                comply with official investigations or legal proceedings initiated by governmental and/or law
                enforcement officials, we may not be able to ensure that such recipients of your Personal Information
                will maintain the privacy or security of your Personal Information.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention Period</h2>
              <p className="text-muted-foreground">
                We will store your data, including Personal Information, for a reasonable period based on our analysis
                of how long the specific data is reasonably required for legal or business purposes. When the applicable
                period has expired, we securely delete or destroy such data. Aggregated data, which cannot identify a
                device/browser (or individual) is retained in a similar manner. Sometimes business and legal
                requirements oblige us to retain certain information, for specific purposes, for an extended period of
                time. Reasons we might retain some data for longer periods of time include: Security, fraud & abuse
                prevention. Financial record-keeping. Complying with legal or regulatory requirements. Ensuring the
                continuity of our services at our Site. At any time, please email us at legal@lucey.ai if you would like
                (a) to receive a copy of your data or any additional information regarding the collection of your data
                (categories, type etc), (b) to make a correction to your data (c) to delete or remove your data (d) to
                transfer your data to another entity (subject to our commercially reasonable limitations regarding form,
                time and source) (e) to revoke your consent regarding agreement with this Policy or (f) to object to any
                portion of this policy or the collection of your data pursuant to this policy. All requests will be
                addressed as soon as it is commercially reasonable for us to do so and is at all times subject to any
                obligations we are required to comply with under applicable law. Our Site is not directed to collect any
                data from people under the age of 18. We do not knowingly allow anyone under 18 to submit any data to
                our Site. If you believe your child may have provided us with their data, please contact us as soon as
                possible.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Integrity & Security</h2>
              <p className="text-muted-foreground">
                We take information privacy and security very seriously. We work hard to protect the Personal
                Information you provide us from loss, misuse, or unauthorized access. We utilize a variety of safeguards
                such as encryption, digital and physical access controls, non-disclosure agreements, and other technical
                and organizational measures to protect the Personal Information submitted to us, both during and post
                transmission. Please note that no electronic transmission, storage, or processing of Personal
                Information can be entirely secure. We cannot guarantee that the security measures we have in place to
                safeguard Personal Information will never be defeated or fail, or that those measures will always be
                sufficient or effective. Therefore, although we are committed to protecting your privacy, we do not
                promise, and you should not expect that your Personal Information will always remain private or secure.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Supervisory Authority Oversight</h2>
              <p className="text-muted-foreground">
                If you are a data subject whose data we process, you may also have the right to lodge a complaint with a
                data protection regulator in one or more of the European Union member states.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions regarding this policy, you may contact us by email to the following email
                address: legal@lucey.ai.{" "}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

