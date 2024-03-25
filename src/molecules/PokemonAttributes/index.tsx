import { FC } from "react";
import { Container, Content, Name, Value } from "./PokemonAttributes.style";

interface PokemonAttributesProps {
  abilities: string[];
  height: number;
  weight: number;
  species: string[];
}

export const PokemonAttributes: FC<PokemonAttributesProps> = (props) => {
  const { abilities, height, weight, species } = props;
  return (
    <Container>
      <Content>
        <Name>Abilities:</Name>
        <Value>{abilities?.join(", ")}</Value>
      </Content>
      <Content>
        <Name>Height:</Name>
        <Value>{height}</Value>
      </Content>
      <Content>
        <Name>Weight:</Name>
        <Value>{weight}</Value>
      </Content>
      <Content>
        <Name>Species:</Name>
        <Value>{species?.join(", ")}</Value>
      </Content>
    </Container>
  );
};
