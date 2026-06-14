import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Services from "@/components/Services";
import BookingSection from "@/components/BookingSection";

export const metadata: Metadata = {
  title: `Prestations — ${siteConfig.name}`,
  description:
    "Découvrez toutes les prestations de Nailsesari : manucure, pose gel, nail art, gainage, remplissage et dépose.",
};

export default function PrestationsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 text-center mb-4">
        <p
          className="font-body text-xs uppercase tracking-widest mb-4"
          style={{ color: "#A05C8A" }}
        >
          Ce que je propose
        </p>
        <h1
          className="font-display font-light italic"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", color: "#F8EEF6" }}
        >
          Mes prestations
        </h1>
      </div>
      <Services />
      <BookingSection />
    </div>
  );
}
