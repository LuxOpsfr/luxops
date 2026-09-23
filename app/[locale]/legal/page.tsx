import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Legal Notices | LuxOps',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LegalPage() {
  return (
    <div className="bg-[#fcfbf8] px-6 pb-20 pt-[calc(var(--site-header-height)+4rem)] text-[#0f211a] md:pb-28">
      <div className="mx-auto max-w-[900px]">

      <h1 className="mb-12 font-display text-4xl font-medium md:text-6xl">
        Mentions Légales / Legal Notices
      </h1>

      {/* FR */}
      <section className="mb-16">
        <h2 className="mb-6 border-b border-[rgba(32,35,31,0.14)] pb-3 font-display text-2xl">
          Mentions Légales
        </h2>

        <div className="space-y-8 text-sm leading-7 text-[#5d665f]">

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Éditeur du site</h3>
            <p>LuxOps</p>
            <p>Entrepreneur Individuel : Belkheir Bekhedda</p>
            <p>Bureau 326, 59 rue de Ponthieu, 75008 Paris, France</p>
            <p>Email : <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a></p>
            <p>SIREN : 809 307 986 R.C.S Paris</p>
            <p>Code APE : 7490B</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Directeur de la publication</h3>
            <p>Belkheir Bekhedda</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Hébergement</h3>
            <p>Vercel Inc.</p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1d2e] underline">vercel.com</a></p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Propriété intellectuelle</h3>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images, ressources téléchargeables) est la propriété exclusive de LuxOps, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Données personnelles</h3>
            <p>
              Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont ni revendues ni transmises à des tiers. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données en nous contactant à <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Produits numériques</h3>
            <p>
              Les playbooks et ressources numériques vendus sur ce site sont des biens immatériels. Conformément à l’article L221-28 du Code de la consommation, le droit de rétractation ne s’applique pas aux contenus numériques fournis immédiatement après l’achat et pour lesquels le consommateur a renoncé expressément à son droit de rétractation.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Cookies</h3>
            <p>
              Ce site utilise des cookies analytiques (Vercel Analytics) pour mesurer l’audience de manière anonyme. Aucun cookie publicitaire n’est utilisé.
            </p>
          </div>

        </div>
      </section>

      {/* EN */}
      <section>
        <h2 className="mb-6 border-b border-[rgba(32,35,31,0.14)] pb-3 font-display text-2xl">
          Legal Notices
        </h2>

        <div className="space-y-8 text-sm leading-7 text-[#5d665f]">

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Publisher</h3>
            <p>LuxOps</p>
            <p>Sole Trader: Belkheir Bekhedda</p>
            <p>Office 326, 59 rue de Ponthieu, 75008 Paris, France</p>
            <p>Email: <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a></p>
            <p>SIREN: 809 307 986 R.C.S Paris</p>
            <p>APE Code: 7490B</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Publication Director</h3>
            <p>Belkheir Bekhedda</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Hosting</h3>
            <p>Vercel Inc.</p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, United States</p>
            <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1d2e] underline">vercel.com</a></p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Intellectual Property</h3>
            <p>
              All content on this website (texts, images, downloadable resources) is the exclusive property of LuxOps unless otherwise stated. Any reproduction, representation or distribution, in whole or in part, without prior written authorisation is prohibited.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Personal Data</h3>
            <p>
              Data collected through contact forms is used solely to respond to user requests. It is neither sold nor shared with third parties. In accordance with GDPR, you have the right to access, rectify and delete your data by contacting us at <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a>.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Digital Products</h3>
            <p>
              Playbooks and digital resources sold on this site are intangible goods. In accordance with applicable consumer protection law, the right of withdrawal does not apply to digital content provided immediately after purchase where the consumer has expressly waived their right of withdrawal.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-[#0f211a]">Cookies</h3>
            <p>
              This site uses analytical cookies (Vercel Analytics) to measure audience anonymously. No advertising cookies are used.
            </p>
          </div>

        </div>
      </section>

      <p className="mt-12 text-xs text-[#687169]">© 2026 LuxOps. All rights reserved.</p>

      </div>
    </div>
  )
}
