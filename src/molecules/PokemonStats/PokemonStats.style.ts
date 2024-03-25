"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 50%;
  min-width: 200px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const Name = styled.p`
  ${({ theme }) => theme.typography.body1};
  text-transform: capitalize;
  white-space: nowrap;
`;

export const ProgressWrapper = styled.div`
  width: 300px;
`;
