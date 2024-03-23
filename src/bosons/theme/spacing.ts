import getSpacing from "./getSpacing";

interface SpacingTheme {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const spacing: SpacingTheme = {
  xs: getSpacing(0.5),
  sm: getSpacing(1),
  md: getSpacing(1.5),
  lg: getSpacing(2),
  xl: getSpacing(3),
  xxl: getSpacing(4),
};
export default spacing;
