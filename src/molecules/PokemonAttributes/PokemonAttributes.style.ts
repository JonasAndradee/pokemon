"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  min-width: 300px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Name = styled.p`
  ${({ theme }) => theme.typography.body1};
`;

export const Value = styled.p`
  ${({ theme }) => theme.typography.body2};
  text-transform: capitalize;
  text-align: left;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
