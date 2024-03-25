"use client";
import { Chip } from "@atoms/Chip";
import { Pokemon } from "@entities/pokemon";
import { PokemonAttributes } from "@molecules/PokemonAttributes";
import { PokemonStats } from "@molecules/PokemonStats";
import { Children, FC } from "react";
import {
  Container,
  Image,
  LeftSideContent,
  LeftSideHeader,
  Name,
  RightSideContent,
  Triangle,
  TypesContent,
} from "./PokemonDetails.style";

interface PokemonDetailsProps {
  data: Pokemon;
}

export const PokemonDetails: FC<PokemonDetailsProps> = ({ data }) => {
  const { name, categories, urlImage, abilities, height, weight, stats } = data;
  const firstType = categories[0];

  return (
    <Container>
      <LeftSideContent>
        <LeftSideHeader $type={firstType}>
          <Name $type={firstType}>{name}</Name>
          <TypesContent $type={categories[0]}>
            {Children.toArray(
              categories.map((category) => <Chip label={category} />)
            )}
          </TypesContent>
        </LeftSideHeader>
        <PokemonAttributes
          height={height}
          weight={weight}
          abilities={abilities}
        />
        <PokemonStats stats={stats} />
      </LeftSideContent>
      <RightSideContent>
        <Image src={urlImage} />
        <Triangle $type={firstType} />
      </RightSideContent>
    </Container>
  );
};
