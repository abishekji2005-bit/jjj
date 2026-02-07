export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        midnight: "#0b0d12",
        graphite: "#1c1f26",
        mist: "#f2f5f7",
        neon: "#7cf0ff",
        ember: "#ff8a5b"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wide: "0.2em"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 240, 255, 0.2)",
        card: "0 30px 80px rgba(3, 8, 20, 0.35)"
      }
    }
  },
  plugins: []
};
