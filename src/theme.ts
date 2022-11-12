import { Inter } from "@next/font/google";
import { extendTheme } from "@mui/joy/styles";

export const roboto = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = extendTheme({
  fontFamily: {
    body: "Inter, var(--joy-fontFamily-fallback)",
  },
});

export default theme;
