"use client";

import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 108px);
`;

export const FormTitle = styled.h1`
  ${({ theme }) => theme.typography.h6};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const FormInputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Form = styled.form`
  width: 50%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
