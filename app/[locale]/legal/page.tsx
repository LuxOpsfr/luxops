import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Legal Notices — LuxOps',
}

export default function LegalPage() {
  return (
    <div className="pt-16 py-24 max-w-3xl mx-auto px-6">

      <h1 className="text-3xl font-bold text-[#0a1d2e] mb-12">
        Mentions Légales / Legal Notices
      </h1>

      {/* FR */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#0a1d2e] mb-6 pb-2 border-b border-gray-200">
          Mentions Légales
        </h2>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Éditeur du site</h3>
            <p>LuxOps</p>
            <p>Entrepreneur Individuel — Belkheir Bekhedda</p>
            <p>Rue de Ponthieu, 75008 Paris, France</p>
            <p>Email : <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a></p>
            <p>SIREN : en cours d'attribution</p>
            <p>Code APE : 7490B</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Directeur de la publication</h3>
            <p>Belkheir Bekhedda</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Hébergement</h3>
            <p>Vercel Inc.</p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1d2e] underline">vercel.com</a></p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Propriété intellectuelle</h3>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, ressources téléchargeables) est la propriété exclusive de LuxOps, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Données personnelles</h3>
            <p>
              Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont ni revendues ni transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Produits numériques</h3>
            <p>
              Les playbooks et ressources numériques vendus sur ce site sont des biens immatériels. Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques fournis immédiatement après l'achat et pour lesquels le consommateur a renoncé expressément à son droit de rétractation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Cookies</h3>
            <p>
              Ce site utilise des cookies analytiques (Vercel Analytics) pour mesurer l'audience de manière anonyme. Aucun cookie publicitaire n'est utilisé.
            </p>
          </div>

        </div>
      </section>

      {/* EN */}
      <section>
        <h2 className="text-xl font-bold text-[#0a1d2e] mb-6 pb-2 border-b border-gray-200">
          Legal Notices
        </h2>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Publisher</h3>
            <p>LuxOps</p>
            <p>Sole Trader — Belkheir Bekhedda</p>
            <p>Rue de Ponthieu, 75008 Paris, France</p>
            <p>Email: <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a></p>
            <p>SIREN: pending attribution</p>
            <p>APE Code: 7490B</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Publication Director</h3>
            <p>Belkheir Bekhedda</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Hosting</h3>
            <p>Vercel Inc.</p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, United States</p>
            <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1d2e] underline">vercel.com</a></p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Intellectual Property</h3>
            <p>
              All content on this website (texts, images, downloadable resources) is the exclusive property of LuxOps unless otherwise stated. Any reproduction, representation or distribution, in whole or in part, without prior written authorisation is prohibited.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Personal Data</h3>
            <p>
              Data collected through contact forms is used solely to respond to user requests. It is neither sold nor shared with third parties. In accordance with GDPR, you have the right to access, rectify and delete your data by contacting us at <a href="mailto:contact@luxops.fr" className="text-[#0a1d2e] underline">contact@luxops.fr</a>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Digital Products</h3>
            <p>
              Playbooks and digital resources sold on this site are intangible goods. In accordance with applicable consumer protection law, the right of withdrawal does not apply to digital content provided immediately after purchase where the consumer has expressly waived their right of withdrawal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#0a1d2e] mb-2">Cookies</h3>
            <p>
              This site uses analytical cookies (Vercel Analytics) to measure audience anonymously. No advertising cookies are used.
            </p>
          </div>

        </div>
      </section>

      <p className="mt-12 text-xs text-gray-400">© 2026 LuxOps. All rights reserved.</p>

    </div>
  )
}
