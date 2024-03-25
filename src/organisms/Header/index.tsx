import { Container, Content, Logo, MenuItemLink } from "./Header.styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <a href="/">
          <Logo src="/logo-pokemon.png" />
        </a>
        <MenuItemLink href="/contact">Entrar em contato</MenuItemLink>
      </Content>
    </Container>
  );
};
