import { MainTemplate } from "@templates/MainTemplate";
import { PokemonList } from "../organisms/PokemonList";

export default function Home() {
  return (
    <MainTemplate>
      <PokemonList />
    </MainTemplate>
  );
}
