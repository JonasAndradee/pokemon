import { Colors } from "./styled-components";

const colors = {
  primary_100: "#FFC45B",
  primary_200: "#EBAA34",
  primary_300: "#DB9517",
  primary_400: "#C68106",
  primary_500: "#A56402",
  primary_600: "#EC780A",

  secondary_100: "#AF44C1",
  secondary_200: "#7220A4",
  secondary_300: "#4B0086",
  secondary_400: "#3B0068",
  secondary_500: "#1B022E",
  secondary_600: "#1E0631",
  secondary_700: "#5D2380",
  secondary_800: "#8343AA",
  secondary_900: "#E2D6EB",
  secondary_00: "#DDCAE9",

  neutral_100: "#F5F9FD",
  neutral_200: "#F1F5F9",
  neutral_300: "#E2E8F0",
  neutral_400: "#CBD5E0",
  neutral_500: "#94A3B7",
  neutral_600: "#64748A",
  neutral_700: "#334154",
  neutral_800: "#1E293A",
  neutral_900: "#0F1729",
  neutral_00: "#060D48",

  neutral_alpha_25: "#060D4840",

  error_100: "#EE4648",
  error_200: "#DB2A2C",
  error_300: "#E10B31",
  error_400: "#991D1F",

  success_100: "#88EFB0",
  success_200: "#2AC566",
  success_300: "#0FB44E",

  warning_100: "#FCD35D",
  warning_200: "#F59F2E",
  warning_300: "#D97823",
  warning_400: "#EC780A",

  grey_100: "#757575",
  grey_200: "#B0B0B0",

  contrast_base: "#FFFFFF",

  black_alpha_60: "#00000099",
  black_alpha_20: "#000000D2",
  opacityBalance: "#E2E8F0",
  background: "#FFFFFF",
  opaqueBackground: "rgba(0, 0, 0, 0.6)",
  opaqueText: "rgba(6, 13, 72, 0.25)",
  text: "#060D4899",
  description: "#6A6E91",
  opaqueLine: "#EDF1F6",
  title: "#1E0631F2",
  blacktext: "#1E0631",
  border_grid: "#ddcae9",
  labelText: "#5D2380",
  searchInput: "#8343AA",

  transaction_success: "#0FB44E",
};

function hexToRgba(hex: string = "", opacity: number = 1): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return "";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r},${g},${b},${opacity})`;
}

function getColor(name: keyof Colors, opacity: number = 1): string {
  const transformFn =
    opacity !== 1
      ? (color: string) => hexToRgba(color, opacity)
      : (color: string) => color;

  const selectedColors = colors;

  if (!selectedColors[name]) {
    return transformFn(selectedColors.primary_300);
  }

  return transformFn(selectedColors[name]);
}

export type PokemonColorByCategory = { [key: string]: string };

const pokemonColorByCategory = {
  grass: "#49caae",
  fire: "#f56a67",
  water: "#82c0dd",
  electric: "#e4a65b",
  poison: "#C596BD",
  normal: "#CC9966",
  psychic: "#CC9966",
  ghost: "#C596BD",
  rock: "#808080",
  fighting: "#808080",
  ground: "#CC9966",
  fairy: "#EC8484",
  bug: "#558855",
  dark: "#333333",
  ice: "#7690ac",
  dragon: "#ff7f50",
};

export { colors, getColor, pokemonColorByCategory };
