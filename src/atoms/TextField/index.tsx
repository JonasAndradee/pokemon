import { ForwardRefRenderFunction, InputHTMLAttributes, Ref } from "react";
import { Container, ErrorMessage, Input, Label } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const TextField: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = (
  { label, errorMessage, ...inputProps }: TextFieldProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input hasError={Boolean(errorMessage)} ref={ref} {...inputProps} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};
