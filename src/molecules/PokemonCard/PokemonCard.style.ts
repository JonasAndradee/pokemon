"use client";
import styled from "styled-components";

interface ContainerProps {
  $backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  min-height: 174px;
  display: flex;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  padding: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: 0;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const LeftSideContent = styled.div`
  margin: auto;
`;

export const Name = styled.p`
  ${({ theme }) => theme.typography.button};
  color: ${({ theme }) => theme.getColor("contrast_base")};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-transform: capitalize;
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
