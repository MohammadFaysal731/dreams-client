/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FDE0DE",

          secondary: "#D9EEFF",

          accent: "#F66962",

          neutral: "#F38681",

          warning: "#FFE88F",

          info: "#DFF1FD",

          success: "#BCD2F7",

          "base-100": "#ffffff",

          error: "#917CF6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

