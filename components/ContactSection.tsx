"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionTitle from "./ui/SectionTitle";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/images/bg-zebra-bru.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.15,
  }}
  aria-hidden
/>
{/* Overlay */}
<div
  className="absolute inset-0"
  style={{
    background: "radial-gradient(ellipse at 70% 30%, rgba(122,59,132,0.7) 0%, rgba(15,11,18,0.95) 60%)",
  }}
  aria-hidden
/>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Parlons-nous" title="Contact" center />

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body leading-relaxed" style={{ color: "#C9B6C5" }}>
              Une question, une demande spéciale ou envie d'un devis personnalisé ?
              N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
            </p>

            <div className="space-y-4">
              {[
      
                { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { icon: MapPin, label: "Localisation", value: siteConfig.contact.address, href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(91, 43, 99, 0.4)", border: "1px solid rgba(160, 92, 138, 0.3)" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "#E88BC8" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs" style={{ color: "#8E7A8B" }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm hover:underline"
                        style={{ color: "#C9B6C5" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm" style={{ color: "#C9B6C5" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(26, 18, 32, 0.7)",
                border: "1px solid rgba(160, 92, 138, 0.2)",
              }}
            >
              <h3
                className="font-display text-lg font-medium mb-3"
                style={{ color: "#F8EEF6" }}
              >
                Horaires
              </h3>
              <div className="space-y-2">
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex justify-between font-body text-sm">
                    <span style={{ color: "#8E7A8B" }}>{h.day}</span>
                    <span style={{ color: h.hours === "Fermé" ? "#5F5060" : "#C9B6C5" }}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux */}
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm transition-all"
                style={{
                  background: "rgba(91, 43, 99, 0.3)",
                  border: "1px solid rgba(160, 92, 138, 0.3)",
                  color: "#C9B6C5",
                }}
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-xs mb-1.5"
                    style={{ color: "#8E7A8B" }}
                  >
                    Nom *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom"
                    className="input-elegant"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-xs mb-1.5"
                    style={{ color: "#8E7A8B" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.fr"
                    className="input-elegant"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-xs mb-1.5"
                  style={{ color: "#8E7A8B" }}
                >
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="06 00 00 00 00"
                  className="input-elegant"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs mb-1.5"
                  style={{ color: "#8E7A8B" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Votre message, demande spéciale…"
                  className="input-elegant resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full py-4"
              >
                {status === "loading" ? (
                  "Envoi en cours…"
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="font-body text-sm text-center" style={{ color: "#A8D5A2" }}>
                  ✓ Votre message a bien été envoyé. Je vous répondrai très vite !
                </p>
              )}
              {status === "error" && (
                <p className="font-body text-sm text-center" style={{ color: "#E88BC8" }}>
                  Une erreur s'est produite. Veuillez réessayer ou m'écrire directement par email.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
