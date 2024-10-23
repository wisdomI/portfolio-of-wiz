import { createContext, useMemo, useState } from "react";

import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        red: {
          100: "#E3646E",
        },
        purple: {
          100: "#BB72E9",
        },
        blue: {
          100: "#3996DB",
        },
        green: {
          100: "#82BC4F",
        },
        yellow: {
          100: "#EABD5F",
        },
        grey: {
          100: "#0D0E11",
          200: "#16181D",
          300: "#292C34",
          400: "#878EA1",
          500: "#C0C4CE",
          600: "#E2E4E9",
        },
      }
    : {
        red: {
          100: "#E3646E",
        },
        purple: {
          100: "#BB72E9",
        },
        blue: {
          100: "#3996DB",
        },
        green: {
          100: "#82BC4F",
        },
        yellow: {
          100: "#EABD5F",
        },
        grey: {
          100: "#E2E4E9",
          200: "#C0C4CE",
          300: "#878EA1",
          400: "#292C34",
          500: "#16181D",
          600: "#0D0E11",
        },
      }),
});

// Theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.grey[100],
            },
            // secondary: {
            //   main: colors.grey[500],
            // },
            // neutral: {
            //   light: colors.grey[600],
            //   main: colors.grey[500],
            //   dark: colors.grey[100],
            // },
            background: {
              dark: "#f1f1f1",
            },
            border: {
              dark: colors.grey[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.grey[500],
            },
            // secondary: {
            //   main: colors.grey[500],
            // },
            // neutral: {
            //   light: colors.grey[600],
            //   main: colors.grey[500],
            //   dark: colors.grey[100],
            // },
            background: {
              dark: colors.grey[200],
            },
            border: {
              dark: colors.grey[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Inconsolata", "monospace"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 14,
      },
      p: {
        fontFamily: ["Inconsolata", "monospace"].join(","),
        fontSize: 10,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "none", // Prevents automatic uppercase transformation
            padding: "8px 16px",
            ...(mode === "dark"
              ? {
                  backgroundColor: colors.grey[500],
                  color: colors.grey[100],
                  border: "none",
                  "&:hover": {
                    backgroundColor: colors.grey[600],
                    border: "none",
                  },
                }
              : {
                  backgroundColor: colors.grey[500],
                  color: colors.grey[100],
                  border: "none",
                  "&:hover": {
                    backgroundColor: colors.grey[600],
                    border: "none",
                  },
                }),
          },
        },
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
