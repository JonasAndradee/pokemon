import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.sm}`};
  border: none;
  background-color: ${({ theme }) => theme.getColor("primary_100")};
  color: ${({ theme }) => theme.getColor("contrast_base")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.getColor("primary_100", 0.5)};
  }
`;
