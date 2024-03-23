"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.getColor("neutral_100", 0.2)};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  text-align: center;
`;

export const Label = styled.p`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.getColor("contrast_base")};
  white-space: nowrap;
  text-transform: capitalize;
`;
