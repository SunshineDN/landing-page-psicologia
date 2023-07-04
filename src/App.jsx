import styled from 'styled-components'
import Home from './components/Home/Home'
import Header from './components/Header/Header';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
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
      </Container>
  )
}

export default App