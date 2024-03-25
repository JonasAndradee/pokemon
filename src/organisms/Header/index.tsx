import { Container, Content, Logo, MenuItemLink } from "./Header.styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src="./logo-pokemon.png" />
        <MenuItemLink href="/contact">Entrar em contato</MenuItemLink>
      </Content>
    </Container>
  );
};
