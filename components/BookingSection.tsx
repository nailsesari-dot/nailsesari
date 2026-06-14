"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  { icon: CalendarDays, step: "01", title: "Choisir", desc: "Sélectionnez votre prestation et votre créneau en ligne." },
  { icon: Clock, step: "02", title: "Confirmer", desc: "Recevez un email de confirmation instantané." },
  { icon: Sparkles, step: "03", title: "Profiter", desc: "Venez et repartez avec de magnifiques ongles !" },
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Leopard background zone */}
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/images/bg-zebra-bru.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.25,
  }}
  aria-hidden
/>
{/* Overlay sombre pour garder la lisibilité */}
<div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(135deg, rgba(15,11,18,0.92) 0%, rgba(26,18,32,0.88) 50%, rgba(15,11,18,0.92) 100%)",
  }}
  aria-hidden
/>


      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionTitle
          subtitle="Simple et rapide"
          title="Réservez en ligne"
          center
        />

        <p
          className="font-body mt-4 mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ color: "#C9B6C5" }}
        >
          Réservez votre créneau en quelques clics, 24h/24 et 7j/7. Pas besoin
          d'appeler — choisissez votre prestation et votre heure directement.
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elegant p-6 text-center"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(135deg, #5B2B63, #A05C8A)" }}
              >
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <p
                className="font-display text-4xl font-light italic mb-1"
                style={{ color: "rgba(160, 92, 138, 0.3)" }}
              >
                {s.step}
              </p>
              <h3
                className="font-display text-xl font-medium mb-2"
                style={{ color: "#F8EEF6" }}
              >
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#C9B6C5" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-5 text-base"
          >
            <CalendarDays className="w-5 h-5" />
            Prendre rendez-vous
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="font-body text-xs mt-4" style={{ color: "#8E7A8B" }}>
            Annulation gratuite jusqu'à 24h avant le rendez-vous.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
