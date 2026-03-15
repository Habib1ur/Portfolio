import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#070B14",
        panel: "#0C1424",
        line: "rgba(255,255,255,0.08)",
        glow: "#5EEAD4",
        glowAlt: "#60A5FA",
        glowSoft: "#F472B6"
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-space-grotesk)"]
      },
      boxShadow: {
        glass: "0 20px 80px rgba(8, 15, 30, 0.45)",
        neon: "0 0 50px rgba(94, 234, 212, 0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(96,165,250,0.18), transparent 32%), radial-gradient(circle at 20% 20%, rgba(94,234,212,0.12), transparent 28%), radial-gradient(circle at 80% 0%, rgba(244,114,182,0.12), transparent 25%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.06)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        marquee: "marquee 24s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
