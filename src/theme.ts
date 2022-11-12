import { Inter } from "@next/font/google";
import { extendTheme } from "@mui/joy/styles";

export const roboto = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "var(--joy-palette-neutral-50)",
        },
      },
    },
  },
  fontFamily: {
    body: "Inter, var(--joy-fontFamily-fallback)",
  },
});

export default theme;
