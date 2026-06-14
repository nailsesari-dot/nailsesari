import Link from "next/link";
import { Sparkles, Instagram, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background: "#0A0810",
        borderTop: "1px solid rgba(160, 92, 138, 0.15)",
      }}
    >
      <div className="leopard-bg absolute inset-0 opacity-10" aria-hidden />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
  src="/logo/logo.png"
  alt="Logo Nailsesari"
  width={130}
  height={45}
  className="object-contain"
/>
            </div>
            <p className="font-display font-light italic text-lg mb-4" style={{ color: "#A05C8A" }}>L'art au bout des doigts.</p>
            <div className="flex gap-3">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(91,43,99,0.4)", border: "1px solid rgba(160,92,138,0.3)", color: "#C9B6C5" }} aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: "rgba(91,43,99,0.4)", border: "1px solid rgba(160,92,138,0.3)", color: "#C9B6C5" }} aria-label="TikTok">♪</a>
            </div>
          </div>
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "#8E7A8B" }}>Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "À propos" },
                { href: "#services", label: "Prestations" },
                { href: "#gallery", label: "Galerie" },
                { href: "#testimonials", label: "Avis clients" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm hover:underline" style={{ color: "#C9B6C5" }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "#8E7A8B" }}>Horaires</h3>
            <ul className="space-y-2">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="font-body text-xs" style={{ color: "#8E7A8B" }}>{h.day}</span>
                  <span className="font-body text-xs" style={{ color: h.hours === "Fermé" ? "#5F5060" : "#C9B6C5" }}>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-body text-xs uppercase tracking-widest mb-4" style={{ color: "#8E7A8B" }}>Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={"mailto:" + siteConfig.contact.email} className="flex items-center gap-2 font-body text-sm" style={{ color: "#C9B6C5" }}>
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#8E7A8B" }} />
                <span className="font-body text-sm" style={{ color: "#C9B6C5" }}>{siteConfig.contact.address}</span>
              </li>
            </ul>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 px-5 py-2.5 text-sm">Réserver</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(160,92,138,0.12)" }}>
          <p className="font-body text-xs" style={{ color: "#5F5060" }}>© {new Date().getFullYear()} Nailsesari. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="font-body text-xs hover:underline" style={{ color: "#5F5060" }}>Mentions légales</Link>
            <Link href="/politique-confidentialite" className="font-body text-xs hover:underline" style={{ color: "#5F5060" }}>Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
