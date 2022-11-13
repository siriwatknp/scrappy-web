import { Inter } from "@next/font/google";
import { extendTheme } from "@mui/joy/styles";
import type {} from "@mui/joy/Button";

declare module "@mui/joy/Button" {
  interface ButtonPropsSizeOverrides {
    xl: true;
  }
}

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
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontWeight: 700,
          ...(ownerState.size === "xl" && {
            "--Icon-fontSize": "2rem",
            "--Button-gap": "1rem",
            minHeight: "var(--Button-minHeight, 4rem)",
            fontSize: theme.vars.fontSize.xl,
            paddingBlock: "0.5rem",
            paddingInline: "1rem",
            lineHeight: "1.4",
          }),
          "&:hover:not(:active)": {
            "@media (hover: none)": {
              backgroundColor:
                theme.variants[ownerState.variant!]?.[ownerState.color!]
                  ?.backgroundColor,
            },
          },
        }),
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "&:hover:not(:active)": {
            "@media (hover: none)": {
              backgroundColor:
                theme.variants[ownerState.variant!]?.[ownerState.color!]
                  ?.backgroundColor,
            },
          },
        }),
      },
    },
  },
});

export default theme;
