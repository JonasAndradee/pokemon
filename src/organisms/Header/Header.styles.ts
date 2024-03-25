"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 64px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const Logo = styled.img`
  width: 90px;
`;

export const MenuItemLink = styled.a`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.getColor("secondary_600")};
`;
