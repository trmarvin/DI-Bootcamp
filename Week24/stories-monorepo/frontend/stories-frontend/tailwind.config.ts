import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#48d1cc", // torquoise
          secondary: "#e67e00", // orange-500
          accent: "#22c55e", // green-500
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
} satisfies Config;
