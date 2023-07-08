import { H1, H2, H3, HomeContainer, Image, TextInfo, TextSection, WhatsAppIcon, WhatsAppText, WhatsAppWrapper, BottomBG } from "./styles"

const Home = () => {
  return (
    <HomeContainer id="home">
      <BottomBG />
      <Image />
      <TextSection>
        <TextInfo>
          <H3>PSICÓLOGA CLÍNICA |CRP: 02/23385</H3>
          <H1>Mariana Sá de Lima</H1>
          <H2>Minha missão é te ajudar a alcançar uma vida mais plena, fortalecendo sua saúde mental. Invista em si mesmo e descubra todo o seu potencial.</H2>
        </TextInfo>
        <WhatsAppWrapper>
          <WhatsAppIcon />
          <WhatsAppText>
            Marque uma consulta 
          </WhatsAppText>
        </WhatsAppWrapper>
      </TextSection>
    </HomeContainer>
  )
}

export default Home