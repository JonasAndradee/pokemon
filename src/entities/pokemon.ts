export type Stats = {
  name: string;
  value: number;
};

export interface Pokemon {
  id: number;
  name: string;
  urlImage: string;
  categories: string[];
  abilities: string[];
  height: number;
  weight: number;
  stats: Stats[];
}
