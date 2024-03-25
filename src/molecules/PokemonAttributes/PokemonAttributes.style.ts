"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  min-width: 200px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Name = styled.p`
  ${({ theme }) => theme.typography.body1};
`;

export const Value = styled.p`
  ${({ theme }) => theme.typography.body2};
`;
