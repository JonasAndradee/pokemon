import { ForwardRefRenderFunction, InputHTMLAttributes, Ref } from "react";
import {
  Container,
  ErrorMessage,
  Label,
  TextArea,
} from "./TextAreaField.styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

export const TextAreaField: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  { label, errorMessage, ...inputProps }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>
) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextArea hasError={Boolean(errorMessage)} ref={ref} {...inputProps} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};
