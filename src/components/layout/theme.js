import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: { 50: "#252728", 60: "#222525", 500: "#000" },
    white: {
      50: "#BDEBEA",
      60: "#D7E5EC",
      70: "#D9F2F2",
      100: "#FFF",
    },
    firstGrad: { 500: "#00F5A0" },
    secondGrad: { 500: "#00D9F5" },
  },
  fonts: {
    h1: "Montserrat, sans-serif",
    h2: "Tinos, serif",
    body: "Montserrat, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#041F31",
        color: "#BDEBEA",
      },
    },
  },
});

export default theme;
