"use client";
import {
  PokemonColorByCategory,
  pokemonColorByCategory,
} from "@bosons/theme/colors";
import styled from "styled-components";

const getBackgroundByCategory = (firstCategory: string) => {
  if (firstCategory) {
    return (
      (pokemonColorByCategory as PokemonColorByCategory)[firstCategory] ||
      pokemonColorByCategory["grass"]
    );
  }
};

interface PokemonAbilityType {
  $type: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.getColor("neutral_100")};
`;

export const LeftSideContent = styled.div`
  width: 50%;
  padding: ${({ theme }) => theme.spacing.xxl};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftSideHeader = styled.div<PokemonAbilityType>``;

export const Name = styled.p<PokemonAbilityType>`
  ${({ theme }) => theme.typography.h1};
  color: ${({ $type }) => getBackgroundByCategory($type)};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: capitalize;
`;

export const TypesContent = styled.div<PokemonAbilityType>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 30%;
  > div {
    background-color: ${({ $type }) => getBackgroundByCategory($type)};
  }
`;

export const RightSideContent = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
`;

interface TriangleProps extends PokemonAbilityType {
  $backgroundColor?: string;
}

export const Triangle = styled.div<TriangleProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 60vw solid transparent;
  border-bottom: 60vw solid ${({ $type }) => getBackgroundByCategory($type)};
  z-index: 0;
`;
