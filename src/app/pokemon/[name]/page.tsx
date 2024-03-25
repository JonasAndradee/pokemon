import { PokemonDetails } from "@organisms/PokemonDetails";
import { formatterResponseToPokemon } from "@services/pokemonService";
import { pokemonService } from "../../../services";
interface PageProps {
  params: { name: string };
}
export default async function Page({ params }: PageProps) {
  const { name } = params;
  const pokemonData = await pokemonService.getOne(name);

  return <PokemonDetails data={formatterResponseToPokemon(pokemonData)} />;
}
