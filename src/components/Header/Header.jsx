import { useState } from 'react'
import { HeaderContainer, LocalIcon, LocalTelSection, LocalWrapper, LogoIcon, NavBar, RightSection, RightText, NavLink, TelIcon, TelWrapper } from './styles'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'

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
          <LocalWrapper to="https://goo.gl/maps/ZnaTTe2UTDk5CYH2A" target="blank">
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
            <Link to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
            >Início</Link>
          </NavLink>
          <NavLink>
            <Link to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Sobre mim</Link>
          </NavLink>
          <NavLink>
            <Link to="therapy"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Terapia</Link>
          </NavLink>
          <NavLink>
            <Link to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Serviços</Link>
          </NavLink>
          <NavLink>
            <Link to="opinions"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Opiniões</Link>
          </NavLink>
          <NavLink>
            <Link to="query"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >Dúvidas</Link>
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