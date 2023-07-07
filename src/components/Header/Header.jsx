import { useState } from 'react'
import { HeaderContainer, LocalIcon, LocalTelSection, LocalWrapper, LogoIcon, NavBar, RightSection, RightText, StyledLink, NavLink, TelIcon, TelWrapper } from './styles'
import { Divide as Hamburger } from 'hamburger-react'

const Header = () => {
  const [active, setActive] = useState(false);
  const [widthViewPort, setWidthViewPort] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidthViewPort(window.innerWidth);
  });

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
      <Hamburger
        color="#fff"
        size={ widthViewPort * 0.07 }
        toggled={ active }
        toggle={ setActive }
        duration={ 0.5 }
      />
    </HeaderContainer>
  )
}

export default Header