import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Mentions légales — ${siteConfig.name}`,
  description: "Mentions légales du site Nailsesari.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6" style={{ color: "#C9B6C5" }}>
        <h1 className="font-display font-light italic mb-8" style={{ fontSize: "3rem", color: "#F8EEF6" }}>
          Mentions légales
        </h1>
        <section className="mb-8">
          <h2 className="font-display text-xl mb-3" style={{ color: "#D9A4C7" }}>Éditeur du site</h2>
          <p className="font-body text-sm leading-relaxed">
            <strong style={{ color: "#F8EEF6" }}>Nailsesari</strong><br />
            Nom : À compléter<br />
            Adresse : {siteConfig.contact.address}<br />
            Téléphone : À compléter<br />
            Email : {siteConfig.contact.email}<br />
            Forme juridique : À compléter<br />
            N° SIRET : À compléter
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-xl mb-3" style={{ color: "#D9A4C7" }}>Hébergement</h2>
          <p className="font-body text-sm leading-relaxed">
            <strong style={{ color: "#F8EEF6" }}>Vercel Inc.</strong><br />
            340 Pine Street, Suite 701, San Francisco, CA 94104, USA<br />
            <a href="https://vercel.com" style={{ color: "#E88BC8" }}>vercel.com</a>
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-xl mb-3" style={{ color: "#D9A4C7" }}>Propriété intellectuelle</h2>
          <p className="font-body text-sm leading-relaxed">
            L'ensemble du contenu de ce site est la propriété exclusive de Nailsesari. Toute reproduction est interdite sans autorisation préalable.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="font-display text-xl mb-3" style={{ color: "#D9A4C7" }}>Cookies</h2>
          <p className="font-body text-sm leading-relaxed">
            Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n'est utilisé sans votre consentement.
          </p>
        </section>
        <p className="font-body text-xs mt-10" style={{ color: "#8E7A8B" }}>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );
}
