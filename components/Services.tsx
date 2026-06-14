"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import SectionTitle from "./ui/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, #3D1A42 0%, transparent 60%)",
        }}
        aria-hidden
      />
      {/* Leopard accent right */}
      <div
        className="leopard-bg absolute -right-8 top-1/4 w-36 h-64 opacity-30 rounded-l-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          subtitle="Ce que je propose"
          title="Mes prestations"
          center
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elegant p-6 flex flex-col relative group"
            >
              {service.popular && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-body font-medium"
                  style={{
                    background: "rgba(232, 139, 200, 0.15)",
                    border: "1px solid rgba(232, 139, 200, 0.3)",
                    color: "#E88BC8",
                  }}
                >
                  Populaire
                </div>
              )}

              {/* Emoji icon */}
              <div className="text-3xl mb-4">{service.icon}</div>

              <h3
                className="font-display text-xl font-medium mb-2"
                style={{ color: "#F8EEF6" }}
              >
                {service.name}
              </h3>
              <p
                className="font-body text-sm leading-relaxed flex-1 mb-4"
                style={{ color: "#C9B6C5" }}
              >
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4"
                style={{ borderTop: "1px solid rgba(160, 92, 138, 0.15)" }}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" style={{ color: "#8E7A8B" }} />
                  <span className="font-body text-xs" style={{ color: "#8E7A8B" }}>
                    {service.duration}
                  </span>
                </div>
                <span
                  className="font-body text-sm font-medium"
                  style={{ color: "#D9A4C7" }}
                >
                  {service.price}
                </span>
              </div>

              <a
                href={service.bookingUrl ?? siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full mt-4 text-sm py-2.5 group-hover:border-rose-accent"
              >
                Réserver
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note bas */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs text-center mt-8"
          style={{ color: "#8E7A8B" }}
        >
          * Les tarifs sont indicatifs et peuvent varier selon la longueur, la
          complexité du nail art et l'état des ongles.
        </motion.p>
      </div>
    </section>
  );
}
