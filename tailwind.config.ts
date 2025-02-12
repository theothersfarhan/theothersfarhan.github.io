import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#2ad882",
        secondary: "#1f242b",
      },
      screens: {
        "3xl": "1700px",
      },
    },
  },
};
