"use client";
import { PokemonCard } from "@molecules/PokemonCard";
import { FC, useEffect, useState } from "react";
import { Pokemon } from "../../entities/pokemon";
import { pokemonService } from "../../services";
import {
  Container,
  PokemonCardWrapper,
  SkeletonItem,
  SkeletonWrapper,
} from "./PokemonList.style";

interface InfiniteScrollPokemonListProps {
  initialPokemonList: Pokemon[];
}

const skeletonArray = Array.from({ length: 4 });

export const InfiniteScrollPokemonList: FC<InfiniteScrollPokemonListProps> = ({
  initialPokemonList,
}) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemonList);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(initialPokemonList.length);

  useEffect(() => {
    const loadMorePokemon = async () => {
      setLoading(true);
      try {
        const newPokemonList = await pokemonService.getAll({
          limit: 20,
          offset,
        });
        setPokemonList((prevList) => [...prevList, ...newPokemonList]);
        setOffset((prevOffset) => prevOffset + newPokemonList.length);
      } catch (error) {
        console.error("Failed to load pokemon list: ", error);
      } finally {
        setLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMorePokemon();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]); // Listen to changes in offset

  return (
    <Container>
      {pokemonList.map(({ id, name, categories, urlImage }) => (
        <PokemonCardWrapper key={id}>
          <PokemonCard
            id={id}
            name={name}
            imageSrc={urlImage}
            categories={categories}
          />
        </PokemonCardWrapper>
      ))}
      {loading &&
        skeletonArray.map((_, index) => (
          <SkeletonWrapper key={index}>
            <SkeletonItem />
          </SkeletonWrapper>
        ))}
    </Container>
  );
};
