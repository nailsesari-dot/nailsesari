"use client";

import { motion } from "framer-motion";
import { Heart, Award, Clock } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "Chaque paire de mains mérite une attention unique et un travail fait avec amour.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Produits premium, techniques maîtrisées et résultats qui durent dans le temps.",
  },
  {
    icon: Clock,
    title: "Sur-mesure",
    desc: "Chaque prestation est adaptée à votre style, votre vie et vos ongles naturels.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Leopard accent */}
      <div
        className="leopard-bg absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-80 opacity-25 rounded-r-3xl"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle subtitle="Mon univers" title="À propos" />

            <div className="mt-8 space-y-5">
              <p
                className="font-body leading-relaxed"
                style={{ color: "#C9B6C5", fontSize: "1.05rem" }}
              >
                Passionnée par l'art et la beauté depuis toujours, je suis devenue nail
                artist par vocation. Pour moi, les ongles sont bien plus qu'un détail
                — ils sont une extension de votre personnalité.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ color: "#C9B6C5", fontSize: "1.05rem" }}
              >
                Formée aux dernières techniques — pose gel, nail art 3D, chrome,
                gainage — je crée des résultats qui allient durabilité et esthétisme.
                Chaque rendez-vous est un moment de soin, de partage et de créativité.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ color: "#C9B6C5", fontSize: "1.05rem" }}
              >
                Bienvenue dans mon univers violet, mauve et féminin. Je serai ravie
                de vous recevoir et de sublimer vos mains.
              </p>
            </div>

            <div className="mt-10">
              <p
                className="font-display font-light italic"
                style={{ fontSize: "1.5rem", color: "#E88BC8" }}
              >
                "L'art au bout des doigts."
              </p>
              <p className="font-body text-sm mt-2" style={{ color: "#8E7A8B" }}>
                — Nailsesari
              </p>
            </div>
          </motion.div>

          {/* Cards valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="card-elegant p-6 flex gap-5 items-start"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #5B2B63, #A05C8A)",
                  }}
                >
                  <val.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3
                    className="font-display font-medium text-xl mb-1"
                    style={{ color: "#F8EEF6" }}
                  >
                    {val.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#C9B6C5" }}>
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Visual placeholder */}
            <div
              className="leopard-bg rounded-2xl h-32 flex items-center justify-center mt-6"
              style={{
                background: "linear-gradient(135deg, #1A1220, #251630)",
                border: "1px solid rgba(160, 92, 138, 0.2)",
              }}
            >
              <span className="font-display italic text-2xl gradient-text">
                Nailsesari ✦
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
