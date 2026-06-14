import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0F0B12",
          secondary: "#151018",
          card: "#1A1220",
        },
        violet: {
          deep: "#5B2B63",
          DEFAULT: "#7A3B84",
          light: "#A05C8A",
        },
        mauve: {
          DEFAULT: "#A05C8A",
          light: "#C48BAF",
        },
        rose: {
          powder: "#D9A4C7",
          accent: "#E88BC8",
        },
        text: {
          primary: "#F8EEF6",
          secondary: "#C9B6C5",
          muted: "#8E7A8B",
        },
        prune: "#3D1A42",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        leopard: "url('/textures/leopard-violet.svg')",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 30px rgba(232, 139, 200, 0.15)",
        "glow-strong": "0 0 60px rgba(160, 92, 138, 0.25)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
