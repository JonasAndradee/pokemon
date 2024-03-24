import { pokemonService } from "../../services";
import { InfiniteScrollPokemonList } from "../InfiniteScrollPokemonList";

export const PokemonList = async () => {
  const pokemonList = await pokemonService.getAll({ offset: 0, limit: 20 });

  return <InfiniteScrollPokemonList initialPokemonList={pokemonList} />;
};
