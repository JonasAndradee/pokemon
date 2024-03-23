import { css } from "styled-components";
import FontFamilies from "./fonts";

enum SizeKey {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  Subtitle1 = "subtitle1",
  Body1 = "body1",
  Body2 = "body2",
  Caption1 = "caption1",
  Caption2 = "caption2",
  Button = "button",
  Overline = "overline",
}

export type StyleValue = {
  [key in SizeKey]: {
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
    fontWeight: number;
  };
};

const typographyStyle: StyleValue = {
  [SizeKey.H1]: {
    fontSize: 64,
    fontFamily: FontFamilies.Inter,
    lineHeight: 72,
    fontWeight: 300,
  },
  [SizeKey.H2]: {
    fontSize: 52,
    fontFamily: FontFamilies.Inter,
    lineHeight: 48,
    fontWeight: 300,
  },
  [SizeKey.H3]: {
    fontSize: 40,
    fontFamily: FontFamilies.Inter,
    lineHeight: 48,
    fontWeight: 300,
  },
  [SizeKey.H4]: {
    fontSize: 36,
    fontFamily: FontFamilies.Inter,
    lineHeight: 44,
    fontWeight: 300,
  },
  [SizeKey.H5]: {
    fontSize: 32,
    fontFamily: FontFamilies.Inter,
    lineHeight: 38,
    fontWeight: 300,
  },
  [SizeKey.H6]: {
    fontSize: 22,
    fontFamily: FontFamilies.Inter,
    lineHeight: 32,
    fontWeight: 300,
  },
  [SizeKey.Subtitle1]: {
    fontSize: 20,
    fontFamily: FontFamilies.Inter,
    lineHeight: 24,
    fontWeight: 600,
  },
  [SizeKey.Body1]: {
    fontSize: 18,
    fontFamily: FontFamilies.Inter,
    lineHeight: 24,
    fontWeight: 400,
  },
  [SizeKey.Body2]: {
    fontSize: 16,
    fontFamily: FontFamilies.Inter,
    lineHeight: 24,
    fontWeight: 600,
  },
  [SizeKey.Caption1]: {
    fontSize: 14,
    fontFamily: FontFamilies.Inter,
    lineHeight: 20,
    fontWeight: 600,
  },
  [SizeKey.Caption2]: {
    fontSize: 12,
    fontFamily: FontFamilies.Inter,
    lineHeight: 16,
    fontWeight: 600,
  },
  [SizeKey.Button]: {
    fontSize: 18,
    fontFamily: FontFamilies.Inter,
    lineHeight: 24,
    fontWeight: 600,
  },
  [SizeKey.Overline]: {
    fontSize: 14,
    fontFamily: FontFamilies.Inter,
    lineHeight: 24,
    fontWeight: 600,
  },
};

const createStyle = (sizeKey: SizeKey) => css`
  font-family: ${typographyStyle[sizeKey].fontFamily};
  font-size: ${typographyStyle[sizeKey].fontSize}rem;
  line-height: ${typographyStyle[sizeKey].lineHeight}px;
  font-weight: ${typographyStyle[sizeKey].fontWeight};
`;

const typography = {
  h1: createStyle(SizeKey.H1),
  h2: createStyle(SizeKey.H2),
  h3: createStyle(SizeKey.H3),
  h4: createStyle(SizeKey.H4),
  h5: createStyle(SizeKey.H5),
  h6: createStyle(SizeKey.H6),
  subtitle1: createStyle(SizeKey.Subtitle1),
  body1: createStyle(SizeKey.Body1),
  body2: createStyle(SizeKey.Body2),
  caption1: createStyle(SizeKey.Caption1),
  caption2: createStyle(SizeKey.Caption2),
  button: createStyle(SizeKey.Button),
  overline: createStyle(SizeKey.Overline),
  typographyStyle,
};

export default typography;
