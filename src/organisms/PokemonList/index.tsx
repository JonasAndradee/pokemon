import { PokemonCard } from "@molecules/PokemonCard";
import { pokemonService } from "../../services";
import { Container, PokemonCardWrapper } from "./PokemonList.style";

export const PokemonList = async () => {
  const pokemonList = await pokemonService.getAll();

  return (
    <Container>
      {pokemonList?.map(({ id, name, categories, urlImage }) => (
        <PokemonCardWrapper key={id}>
          <PokemonCard
            key={id}
            id={id}
            name={name}
            imageSrc={urlImage}
            categories={categories}
          />
        </PokemonCardWrapper>
      ))}
    </Container>
  );
};
