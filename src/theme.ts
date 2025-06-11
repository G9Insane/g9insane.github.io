import {
  createTheme, type MantineThemeOverride, type DefaultMantineColor,
  type MantineColorsTuple, } from "@mantine/core";

type ExtendedCustomColors =
  | 'primary'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    primaryColor: "asd";
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: [
      "#eef6fc",
      "#dce9f3",
      "#b4d1e8",
      "#89b9de",
      "#67a4d6",
      "#5296d1",
      "#4690d0",
      "#387db8",
      "#2d6fa5",
      "#092031"
    ],
  }
});