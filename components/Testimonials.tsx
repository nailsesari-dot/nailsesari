"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "./ui/SectionTitle";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #5B2B63 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Elles me font confiance" title="Avis clients" center />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elegant p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#E88BC8" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="font-body text-sm leading-relaxed flex-1 mb-5"
                style={{ color: "#C9B6C5" }}
              >
                "{t.comment}"
              </blockquote>

              {/* Footer */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(160, 92, 138, 0.15)" }}
              >
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-body text-xs font-medium"
                  style={{
                    background: "linear-gradient(135deg, #5B2B63, #A05C8A)",
                    color: "#F8EEF6",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-body text-sm font-medium"
                    style={{ color: "#F8EEF6" }}
                  >
                    {t.name}
                  </p>
                  <p className="font-body text-xs" style={{ color: "#8E7A8B" }}>
                    {t.service} · {t.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(91, 43, 99, 0.2)",
              border: "1px solid rgba(160, 92, 138, 0.3)",
            }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: "#E88BC8" }}
                />
              ))}
            </div>
            <span
              className="font-display text-lg font-medium"
              style={{ color: "#F8EEF6" }}
            >
              4,8/5
            </span>
            <span className="font-body text-sm" style={{ color: "#C9B6C5" }}>
              · +50 avis clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
