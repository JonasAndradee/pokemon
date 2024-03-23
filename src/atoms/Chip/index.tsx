import { FC } from "react";
import { Container, Label } from "./Chip.styles";

interface ChipProps {
  label: string;
}

export const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
