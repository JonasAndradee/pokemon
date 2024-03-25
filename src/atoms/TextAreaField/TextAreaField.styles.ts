"use client";
import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.p`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.getColor("neutral_00", 0.6)};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const TextArea = styled.textarea<{ hasError: boolean }>`
  all: unset;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid;
  border-color: ${({ theme, hasError }) =>
    hasError
      ? theme.getColor("error_100")
      : theme.getColor("neutral_00", 0.08)};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme }) => theme.getColor("secondary_600", 0.95)};
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.getColor("error_100")};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
