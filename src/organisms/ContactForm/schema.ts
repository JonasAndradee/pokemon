import { object, string } from "yup";

export const contactFormSchema = object({
  name: string().required("Preencha o campo"),
  email: string().email("Digite um e-mail válido").required("Preencha o campo"),
  message: string().required("Preencha o campo"),
});
