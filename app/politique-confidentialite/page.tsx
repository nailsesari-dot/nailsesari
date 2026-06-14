import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${siteConfig.name}`,
  description: "Politique de confidentialité et gestion des données personnelles de Nailsesari.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6" style={{ color: "#C9B6C5" }}>
        <h1
          className="font-display font-light italic mb-8"
          style={{ fontSize: "3rem", color: "#F8EEF6" }}
        >
          Politique de confidentialité
        </h1>

        {[
          {
            title: "Responsable du traitement",
            content: `Nailsesari — ${siteConfig.contact.email} — ${siteConfig.contact.phone}`,
          },
          {
            title: "Données collectées",
            content:
              "Lors de l'utilisation du formulaire de contact, nous collectons votre nom, adresse email, numéro de téléphone (facultatif) et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à vos demandes.",
          },
          {
            title: "Base légale",
            content:
              "Le traitement de vos données est fondé sur votre consentement explicite lors de la soumission du formulaire de contact, conformément au RGPD (article 6, §1, a).",
          },
          {
            title: "Durée de conservation",
            content:
              "Vos données sont conservées pour une durée maximale de 3 ans à compter de votre dernier contact avec nous, sauf obligation légale contraire.",
          },
          {
            title: "Partage des données",
            content:
              "Vos données personnelles ne sont ni vendues, ni cédées, ni partagées avec des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques (hébergeur, service d'envoi d'emails) uniquement dans le cadre de la fourniture du service.",
          },
          {
            title: "Vos droits",
            content: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à l'adresse : ${siteConfig.contact.email}.`,
          },
          {
            title: "Cookies",
            content:
              "Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie de tracking ou publicitaire n'est déposé sans votre consentement. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.",
          },
          {
            title: "Réclamation",
            content:
              "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr.",
          },
        ].map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="font-display text-xl mb-3" style={{ color: "#D9A4C7" }}>
              {section.title}
            </h2>
            <p className="font-body text-sm leading-relaxed">{section.content}</p>
          </section>
        ))}

        <p className="font-body text-xs mt-10" style={{ color: "#8E7A8B" }}>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );
}
