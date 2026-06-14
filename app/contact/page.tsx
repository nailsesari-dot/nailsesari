import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Contactez Nailsesari pour toute question ou demande spéciale.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 text-center mb-4">
        <p
          className="font-body text-xs uppercase tracking-widest mb-4"
          style={{ color: "#A05C8A" }}
        >
          Parlons-nous
        </p>
        <h1
          className="font-display font-light italic"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", color: "#F8EEF6" }}
        >
          Contact
        </h1>
      </div>
      <ContactSection />
    </div>
  );
}
