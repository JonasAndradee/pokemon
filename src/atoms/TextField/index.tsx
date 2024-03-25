import { FC, InputHTMLAttributes } from "react";
import { Container, ErrorMessage, Input, Label } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const TextField: FC<TextFieldProps> = ({
  label,
  errorMessage,
  ...inputProps
}: TextFieldProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container $hasError={Boolean(errorMessage)}>
        <Input {...inputProps} />
      </Container>
      {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
