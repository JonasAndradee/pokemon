import { FC, TextareaHTMLAttributes } from "react";
import {
  Container,
  ErrorMessage,
  Label,
  TextArea,
} from "./TextAreaField.styles";

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

export const TextAreaField: FC<TextAreaFieldProps> = ({
  label,
  errorMessage,
  ...inputProps
}: TextAreaFieldProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container $hasError={Boolean(errorMessage)}>
        <TextArea {...inputProps} />
      </Container>
      {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};
