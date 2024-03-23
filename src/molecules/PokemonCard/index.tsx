import { Chip } from "@atoms/Chip";
import { Children, FC } from "react";
import {
  AttributeList,
  AttributeWrapper,
  Container,
  Img,
  LeftSideContent,
  Name,
  RightSideContent,
} from "./PokemonCard.style";

type Category = {
  label: string;
};

interface PokemonCardProps {
  id: number;
  name: string;
  categories?: Category[];
  imageSrc: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({
  categories,
  name,
  imageSrc,
}) => {
  return (
    <Container>
      <LeftSideContent>
        <Name>{name}</Name>
        <AttributeList>
          {Children.toArray(
            categories?.map(({ label }) => (
              <AttributeWrapper>
                <Chip label={label} />
              </AttributeWrapper>
            ))
          )}
        </AttributeList>
      </LeftSideContent>
      <RightSideContent>
        <Img src={imageSrc} />
      </RightSideContent>
    </Container>
  );
};
