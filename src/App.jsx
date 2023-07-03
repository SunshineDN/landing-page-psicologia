import styled from 'styled-components'
import Home from './components/Home/Home'

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bg_gradient};
`;

const App = () => {
  return (
      <Container>
        <Home />
      </Container>
  )
}

export default App