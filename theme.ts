import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  breakpoints: {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px"
  },
  // Controls --mantine-font-family
  fontFamily: "Arial, sans-serif",

  // Controls --mantine-font-family-monospace
  fontFamilyMonospace: "Courier New, monospace",

  headings: {
    // Controls --mantine-font-family-headings
    fontFamily: "Georgia, serif",
  },
});
