"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/gallery";
import SectionTitle from "./ui/SectionTitle";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Leopard accents */}
      <div
        className="leopard-bg absolute -left-6 bottom-10 w-32 h-48 opacity-25 rounded-r-2xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle subtitle="Mes créations" title="Galerie" center />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-full font-body text-sm transition-all duration-200"
              style={
                activeCategory === cat.id
                  ? {
                      background: "linear-gradient(135deg, #A05C8A, #E88BC8)",
                      color: "#fff",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid rgba(160, 92, 138, 0.3)",
                      color: "#C9B6C5",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm mb-4" style={{ color: "#8E7A8B" }}>
            Retrouvez plus de créations sur Instagram
          </p>
          <a
            href="https://instagram.com/nailsesari"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            @nailsesari
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative aspect-square overflow-hidden rounded-2xl group"
      style={{
        background: "linear-gradient(135deg, #1A1220, #251630)",
        border: "1px solid rgba(160, 92, 138, 0.2)",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(15,11,18,0.8), transparent)",
        }}
      >
        <span className="font-body text-xs" style={{ color: "#F8EEF6" }}>
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}