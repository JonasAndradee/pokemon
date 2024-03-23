import "styled-components";

export interface Colors {
  primary_100: string;
  primary_200: string;
  primary_300: string;
  primary_400: string;
  primary_500: string;
  primary_600: string;
  secondary_100: string;
  secondary_200: string;
  secondary_300: string;
  secondary_400: string;
  secondary_500: string;
  secondary_600: string;
  secondary_700: string;
  secondary_800: string;
  secondary_900: string;
  secondary_00: string;
  neutral_100: string;
  neutral_200: string;
  neutral_300: string;
  neutral_400: string;
  neutral_500: string;
  neutral_600: string;
  neutral_700: string;
  neutral_800: string;
  neutral_900: string;
  neutral_00: string;
  neutral_alpha_25: string;
  error_100: string;
  error_200: string;
  error_300: string;
  error_400: string;
  success_100: string;
  success_200: string;
  success_300: string;
  warning_100: string;
  warning_200: string;
  warning_300: string;
  warning_400: string;
  grey_100: string;
  grey_200: string;
  contrast_base: string;
  black_alpha_60: string;
  black_alpha_20: string;
  opacityBalance: string;
  background: string;
  opaqueText: string;
  opaqueBackground: string;
  text: string;
  opaqueLine: string;
  title: string;
  blacktext: string;
  border_grid: string;
  description: string;
  labelText: string;
  searchInput: string;
  transaction_success: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    getColor: (color: keyof Colors, opacity?: number) => string;
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    typography: {
      h1: RuleSet<object>;
      h2: RuleSet<object>;
      h3: RuleSet<object>;
      h4: RuleSet<object>;
      h5: RuleSet<object>;
      h6: RuleSet<object>;
      subtitle1: RuleSet<object>;
      body1: RuleSet<object>;
      body2: RuleSet<object>;
      caption1: RuleSet<object>;
      caption2: RuleSet<object>;
      button: RuleSet<object>;
      overline: RuleSet<object>;
      typographyStyle: StyleValue;
    };
  }
}
