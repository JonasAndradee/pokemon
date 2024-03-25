import { PokemonDetails } from "@organisms/PokemonDetails";
import { formatterResponseToPokemon } from "@services/pokemonService";
import { MainTemplate } from "@templates/MainTemplate";
import { pokemonService } from "../../../services";
interface PageProps {
  params: { name: string };
}
export default async function Page({ params }: PageProps) {
  const { name } = params;
  const pokemonData = await pokemonService.getOne(name);

  return (
    <MainTemplate>
      <PokemonDetails data={formatterResponseToPokemon(pokemonData)} />
    </MainTemplate>
  );
}
