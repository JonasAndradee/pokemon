"use client";
import Button from "@atoms/Button";
import { TextAreaField } from "@atoms/TextAreaField";
import { TextField } from "@atoms/TextField";
import { Contact } from "@entities/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import contactService from "@services/contactService";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ButtonWrapper,
  Form,
  FormContainer,
  FormInputWrapper,
  FormTitle,
} from "./ContactForm.style";
import { contactFormSchema } from "./schema";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactFormSchema),
  });

  const handleSubmitContact = async (data: Contact) => {
    try {
      setLoading(true);
      await contactService.create(data);
    } catch (error) {
      console.error("Error create contact: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleSubmitContact)}>
        <FormTitle>Formulário de Contato</FormTitle>
        <FormInputWrapper>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Nome"
                errorMessage={error?.message}
              />
            )}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="E-mail"
                errorMessage={error?.message}
              />
            )}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <Controller
            control={control}
            name="message"
            render={({ field, fieldState: { error } }) => (
              <TextAreaField
                {...field}
                label="Mensagem"
                errorMessage={error?.message}
                maxLength={200}
              />
            )}
          />
        </FormInputWrapper>
        <ButtonWrapper>
          <Button disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};
