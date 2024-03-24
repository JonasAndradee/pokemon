"use client";
import styled, { keyframes } from "styled-components";

const SkeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 90%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
`;

export const PokemonCardWrapper = styled.div`
  width: 20%;
  min-width: 300px;
`;

export const SkeletonWrapper = styled.div`
  width: 20%;
  min-width: 300px;
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: 174px;

  background-color: ${({ theme }) => theme.getColor("neutral_300")};

  border-radius: ${({ theme }) => theme.spacing.md};
  animation: ${SkeletonAnimation} 1s infinite;
`;
