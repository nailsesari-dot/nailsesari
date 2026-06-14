import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: `Galerie — ${siteConfig.name}`,
  description: "Découvrez les créations de Nailsesari : nail art, pose gel, manucure et gainage.",
};

export default function GalleriePage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 text-center mb-8">
        <p
          className="font-body text-xs uppercase tracking-widest mb-4"
          style={{ color: "#A05C8A" }}
        >
          Mes créations
        </p>
        <h1
          className="font-display font-light italic"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", color: "#F8EEF6" }}
        >
          Galerie
        </h1>
      </div>
      <Gallery />
    </div>
  );
}
