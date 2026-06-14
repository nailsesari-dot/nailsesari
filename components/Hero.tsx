"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background ambiance */}
      <div className="absolute inset-0" aria-hidden>
        {/* Radial glow violet */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #7A3B84 0%, #5B2B63 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Leopard texture overlay top-right */}
        <div
          className="leopard-bg absolute top-0 right-0 w-64 h-64 opacity-40 rounded-bl-[80px]"
          aria-hidden
        />
        {/* Leopard texture bottom-left */}
        <div
          className="leopard-bg absolute bottom-20 left-0 w-48 h-48 opacity-30 rounded-tr-[60px]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(91, 43, 99, 0.3)",
            border: "1px solid rgba(160, 92, 138, 0.4)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: "#E88BC8" }} />
          <span className="font-body text-xs tracking-widest uppercase"
            style={{ color: "#D9A4C7" }}>
            Nail Artist
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-light italic mb-6 text-balance leading-none"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 7rem)",
            color: "#F8EEF6",
          }}
        >
          Révélez votre{" "}
          <span className="gradient-text">plus belle</span>
          <br />
          expression.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-body font-light max-w-xl mx-auto mb-10 leading-relaxed text-balance"
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
            color: "#C9B6C5",
          }}
        >
          Nailsesari sublime vos ongles avec élégance, créativité et soin.
          Découvrez des prestations personnalisées et réservez votre rendez-vous
          en ligne.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-base w-full sm:w-auto"
          >
            Prendre rendez-vous
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline px-8 py-4 text-base w-full sm:w-auto"
          >
            Voir les prestations
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {[
            { value: "100+", label: "Clientes satisfaites" },
            { value: "7", label: "Prestations disponibles" },
            { value: "4,8★", label: "Note moyenne" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display font-medium"
                style={{ fontSize: "1.75rem", color: "#E88BC8" }}
              >
                {stat.value}
              </p>
              <p className="font-body text-xs mt-0.5" style={{ color: "#8E7A8B" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#8E7A8B" }}
        aria-hidden
      >
        <span className="font-body text-xs tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, #8E7A8B, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
