"use client";
import { PokemonCard } from "@molecules/PokemonCard";
import { Children, FC, memo, useEffect, useState } from "react";
import { Pokemon } from "../../entities/pokemon";
import { pokemonService } from "../../services";
import {
  Container,
  PokemonCardWrapper,
  SkeletonItem,
  SkeletonWrapper,
} from "./PokemonList.style";
import { useRouter } from "next/navigation";

interface InfiniteScrollPokemonListProps {
  initialPokemonList: Pokemon[];
}

const skeletonArray = Array.from({ length: 4 });

const InfiniteScrollPokemonList: FC<InfiniteScrollPokemonListProps> = ({
  initialPokemonList,
}) => {
  const router = useRouter();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(initialPokemonList);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(initialPokemonList.length);

  const handleCardClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

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
  }, [offset]);

  return (
    <Container>
      {Children.toArray(
        pokemonList.map(({ id, name, categories, urlImage }) => (
          <PokemonCardWrapper>
            <PokemonCard
              id={id}
              onCardClick={() => handleCardClick(name)}
              name={name}
              imageSrc={urlImage}
              categories={categories}
            />
          </PokemonCardWrapper>
        ))
      )}
      {loading &&
        Children.toArray(
          skeletonArray.map(() => (
            <SkeletonWrapper>
              <SkeletonItem />
            </SkeletonWrapper>
          ))
        )}
    </Container>
  );
};

const MemoizedInfiniteScrollPokemonList = memo(InfiniteScrollPokemonList);
export { MemoizedInfiniteScrollPokemonList as InfiniteScrollPokemonList };
