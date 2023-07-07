import styled from 'styled-components'
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import CardsComponent from './components/Home/Cards';
import About from './components/About/About';

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
      </Container>
  )
}

export default App