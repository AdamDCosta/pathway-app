import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  // 1. add CSS variable definitions to the base layer
  function ({ addBase }) {
    addBase({
      body: {
        textTransform: "uppercase",
      },
    });
  }
  // 2. extend the tailwind theme with "themable" utilities
);
