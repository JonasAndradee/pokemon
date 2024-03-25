import { FC } from "react";
import { Container, Content, Name, Value } from "./PokemonAttributes.style";

interface PokemonAttributesProps {
  abilities: string[];
  height: number;
  weight: number;
}

export const PokemonAttributes: FC<PokemonAttributesProps> = (props) => {
  const { abilities, height, weight } = props;
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
    </Container>
  );
};
