"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const PokemonCardWrapper = styled.div`
  width: 20%;
  min-width: 300px;
`;
