import styled from 'styled-components'
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import CardsComponent from './components/Home/Cards';
import About from './components/About/About';
import Terapy from './components/Terapy/Terapy';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg_gradient};
`;

const App = () => {
  return (
      <Container>
        <Header />
        <Home />
        <CardsComponent />
        <About />
        <Terapy />
      </Container>
  )
}

export default App