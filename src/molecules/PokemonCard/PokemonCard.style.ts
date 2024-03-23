"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #49caae;
  padding: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.spacing.md};
`;

export const LeftSideContent = styled.div`
  margin: auto;
`;

export const Name = styled.p`
  ${({ theme }) => theme.typography.button};
  color: ${({ theme }) => theme.getColor("contrast_base")};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const AttributeList = styled.div``;

export const AttributeWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const RightSideContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

export const Img = styled.img`
  width: 150px;
`;
