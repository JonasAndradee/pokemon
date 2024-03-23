import { FC } from "react";
import { Container, Label } from "./Chip.styles";

interface ChipProps {
  label: string;
}

const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Chip;
