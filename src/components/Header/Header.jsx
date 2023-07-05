import { HeaderContainer, LocalIcon, LocalTelSection, LocalWrapper, LogoIcon, NavBar, RightSection, RightText, StyledLink, NavLink, TelIcon, TelWrapper } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoIcon />
      <RightSection>
        <LocalTelSection>
          <LocalWrapper>
            <LocalIcon />
            <RightText>Av República do Líbano, 251, Recife PE</RightText>
          </LocalWrapper>
          <TelWrapper>
            <TelIcon />
            <RightText>(81) 98727-4688</RightText>
          </TelWrapper>
        </LocalTelSection>
        <NavBar>
          <NavLink>
            <StyledLink to="#home">Início</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="#about">Sobre mim</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="#therapy">Terapia</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="#services">Serviços</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="#opinions">Opiniões</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="#query">Dúvidas</StyledLink>
          </NavLink>
        </NavBar>
      </RightSection>
    </HeaderContainer>
  )
}

export default Header