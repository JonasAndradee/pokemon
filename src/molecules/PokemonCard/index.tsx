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
import { colorByCategory } from "./data";

interface PokemonCardProps {
  id: number;
  name: string;
  categories?: string[];
  imageSrc: string;
}

type ColorByCategoryType = { [key: string]: string };

export const PokemonCard: FC<PokemonCardProps> = ({
  categories,
  name,
  imageSrc,
}) => {
  const getBackgroundByCategory = () => {
    const firstCategory = categories && categories[0];
    if (firstCategory) {
      return (
        (colorByCategory as ColorByCategoryType)[firstCategory] ||
        colorByCategory["grass"]
      );
    }
  };

  return (
    <Container $backgroundColor={getBackgroundByCategory()}>
      <LeftSideContent>
        <Name>{name}</Name>
        <AttributeList>
          {Children.toArray(
            categories?.map((category) => (
              <AttributeWrapper key={category}>
                <Chip label={category} />
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
