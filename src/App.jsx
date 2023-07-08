import styled from 'styled-components'
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import CardsComponent from './components/Home/Cards';
import About from './components/About/About';
import Therapy from './components/Therapy/Therapy';
import BoxTherapy from './components/Therapy/BoxTherapy';
import PsychoTherapy from './components/PsychoTherapy/PsychoTherapy';
import BoxesInfo from './components/BoxesInfo/BoxesInfo';
import Services from './components/Services/Services';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg_gradient};
  overflow: hidden;
`;

const App = () => {
  return (
      <Container>
        <Header />
        <Home />
        <CardsComponent />
        <About />
        <Therapy />
        <BoxTherapy />
        <PsychoTherapy />
        <BoxesInfo />
        <Services />
      </Container>
  )
}

export default App;