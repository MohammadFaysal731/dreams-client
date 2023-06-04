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
          primary: "#F66962",

          "primary-focus": "#917CF6",

          secondary: "#D9EEFF",

          "secondary-focus": "#807388",

          accent: "#FDE0DE",

          "accent-focus": "#413655",

          neutral: "#F38681",

          "neutral-focus": "#EEE6EC",

          warning: "#FFE88F",

          info: "#DFF1FD",

          success: "#BCD2F7",

          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
