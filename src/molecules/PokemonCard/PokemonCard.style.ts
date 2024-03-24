import styled from "styled-components";

interface ContainerProps {
  $backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.xl};
  padding-right: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
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
