import React, { useContext } from "react";

type themeType = {
  name: string;
  background: string;
  foreground: string;
  header: string;
  footer: string;
  text: string;

}

export const themes: { light: themeType, dark: themeType } = {
  light: {
    name: "light",
    background: `
    linear-gradient(
      90deg,
      rgba(208, 147, 82, 0.6),
      rgba(192, 134, 70, 0.6) 60%,
      rgba(208, 147, 82, 0.6)
    ),
    repeating-radial-gradient(
      ellipse at 60% 500%,
      #c08646,
      #c08646 0.2%,
      #d09352 0.6%,
      #d09352 1%
    )
    `,
    foreground: "",
    header: "",
    footer: "rgba(220, 220, 220, 1)",
    text: "rgba(0, 0, 0, 1)",

  },
  dark: {
    name: "dark",
    background: "black",
    foreground: "rgba(0, 0, 0, 0.6)",
    header: "",
    footer: "",
    text: "rgba(255, 255, 255, 1)",

  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => { }
});

export const useThemeContext = () => useContext(ThemeContext);