"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 40%;
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
`;

export const ProgressWrapper = styled.div`
  width: 300px;
`;
