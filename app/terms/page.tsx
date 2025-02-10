import type { Metadata } from "next"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | Figma Community Clone",
  description: "Read our terms and conditions to understand your rights and responsibilities when using our platform.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
              <p className="text-muted-foreground">
                Read our terms and conditions to understand your rights and responsibilities
              </p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h5 className="text-2xl font-semibold mb-4">Date: 2024-12-16</h5>
              <p className="text-muted-foreground">
                Welcome to www.lucey.ai, a website-hosted user interface (the &quot;Interface&quot; or &quot;App&quot;)
                provided by the Lucey, an exempted foundation company incorporated in the Cayman Islands, the DAO (as
                defined below) and their affiliates. (&quot;Lucey&quot;, &quot;we&quot;, &quot;our&quot; or
                &quot;us&quot;).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to this Agreement</h2>
              <p className="text-muted-foreground">
                We reserve the exclusive right to make changes to this Privacy Policy from time to time, in our sole
                discretion. Your continued access to and use of the Site constitutes your agreement to be bound by
                specific terms of this Privacy Policy posted at such time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                Age: By accessing our using the Site, you represent and warrant that you are at least eighteen (18)
                years of age. If you are under the age of eighteen (18), you may not, under any circumstances or for any
                reason, use the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                We own all Intellectual Property and other rights in the Interface and its contents, including (but not
                limited to) software, text, images, trademarks, service marks, copyrights, patents, and designs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy at www.lucey.ai/privacy to understand
                how we collect, use, and share your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE EXPRESSLY
                DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL OR PUNITIVE DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the Cayman Islands.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at legal@lucey.ai
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

