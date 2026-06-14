import type { Metadata } from "next";
import { CalendarDays, ArrowRight, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: `Réservation — ${siteConfig.name}`,
  description: "Réservez votre rendez-vous chez Nailsesari en ligne, rapidement et facilement.",
};

export default function ReservationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <p
            className="font-body text-xs uppercase tracking-widest mb-4"
            style={{ color: "#A05C8A" }}
          >
            Simple & rapide
          </p>
          <h1
            className="font-display font-light italic mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", color: "#F8EEF6" }}
          >
            Réserver en ligne
          </h1>
          <p className="font-body" style={{ color: "#C9B6C5" }}>
            Choisissez votre prestation et sélectionnez votre créneau directement
            dans le calendrier.
          </p>
        </div>

        {/* CTA principal */}
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-10 py-5 text-base mb-8 inline-flex"
        >
          <CalendarDays className="w-5 h-5" />
          Ouvrir le calendrier
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Widget iframe placeholder */}
        <div
          className="rounded-2xl p-8 mb-12 text-center"
          style={{
            background: "rgba(26, 18, 32, 0.8)",
            border: "1px solid rgba(160, 92, 138, 0.2)",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {/* 
            Décommentez et remplacez src par votre URL de widget :
            <iframe
              src={siteConfig.bookingUrl + "?embed=true"}
              width="100%"
              height="600"
              frameBorder="0"
              title="Réservation Nailsesari"
              style={{ borderRadius: "12px" }}
            />
          */}
          <Sparkles className="w-8 h-8" style={{ color: "#A05C8A" }} />
          <p className="font-display italic text-xl" style={{ color: "#C9B6C5" }}>
            Widget de réservation
          </p>
          <p className="font-body text-sm" style={{ color: "#8E7A8B" }}>
            Configurez votre URL dans <code className="text-rose-powder">config/site.ts</code> et
            activez l'iframe ci-dessous dans le code source.
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            Réserver maintenant
          </a>
        </div>

        {/* Services recap */}
        <div>
          <h2
            className="font-display font-light italic text-2xl mb-6"
            style={{ color: "#D9A4C7" }}
          >
            Prestations disponibles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {services.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(26, 18, 32, 0.6)",
                  border: "1px solid rgba(160, 92, 138, 0.15)",
                }}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-body font-medium text-sm" style={{ color: "#F8EEF6" }}>
                    {s.name}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 font-body text-xs" style={{ color: "#8E7A8B" }}>
                      <Clock className="w-3 h-3" /> {s.duration}
                    </span>
                    <span className="font-body text-xs" style={{ color: "#D9A4C7" }}>
                      {s.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
