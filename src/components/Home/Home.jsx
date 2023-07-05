import { AutoconhecimentoIcon, AcolhimentoIcon, BGHome, Card, CardText, Cards, H1, H2, H3, HomeContainer, Image, Mask, Person, RelacionamentoIcon, SexualidadeIcon, TextInfo, TextSection, WhatsAppIcon, WhatsAppText, WhatsAppWrapper } from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <BGHome>
        <Mask></Mask>
      </BGHome>
      <Person>
        <Image />
        <TextSection>
          <TextInfo>
            <H3>PSICÓLOGA CLÍNICA |CRP: 02/23385</H3>
            <H1>Mariana Sá de Lima</H1>
            <H2>Minha missão é te ajudar a alcançar uma vida mais plena, fortalecendo sua saúde mental. Invista em si mesmo e descubra todo o seu potencial</H2>
          </TextInfo>
          <WhatsAppWrapper>
            <WhatsAppIcon />
            <WhatsAppText>
              Marque uma consulta 
            </WhatsAppText>
          </WhatsAppWrapper>
        </TextSection>
      </Person>
      <Cards>
        <Card>
          <RelacionamentoIcon />
          <CardText>
            Relacionamento
          </CardText>
        </Card>
        <Card>
          <AutoconhecimentoIcon />
          <CardText>
            Autoconhecimento
          </CardText>
        </Card>
        <Card>
          <SexualidadeIcon />
          <CardText>
            Sexualidade
          </CardText>
        </Card>
        <Card>
          <AcolhimentoIcon />
          <CardText>
            Acolhimento
          </CardText>
        </Card>
      </Cards>
    </HomeContainer>
  )
}

export default Home