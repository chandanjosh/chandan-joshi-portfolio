/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        paper: "#F7F6F2",
        ink: "#1C1917",
        "ink-soft": "#6B655D",
        line: "#E4E0D6",
        moss: "#2B4636",
        "moss-soft": "#E9EDE7",
        coral: "#E16B52",
        "coral-soft": "#F8E1D9",
        sky: "#4A7180",
        "sky-soft": "#DDECEF",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
