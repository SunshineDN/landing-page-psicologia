import { Agenda, BottomContainer, BottomTitle, Clock, ItemWrapper, Online, ServicesContainer, TextWrapper, Title, Text, TopContainer, WhatsAppIcon, WhatsAppText, WhatsAppWrapper } from './styles'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TopContainer>
        <ItemWrapper>
          <Agenda />
          <Title>Agendamento virtual</Title>
        </ItemWrapper>
        <ItemWrapper>
          <Online />
          <Title>Serviço online ou presencial</Title>
        </ItemWrapper>
        <ItemWrapper>
          <Clock />
          <Title>flexibilidade de horários</Title>
        </ItemWrapper>
      </TopContainer>
      <BottomContainer>
        <TextWrapper>
          <BottomTitle>
            Fazer terapia nunca foi tão fácil!
          </BottomTitle>
          <Text>
            Atendimento individualizado e tratamento focado, permitindo que você construa a melhor versão de si mesmo!
          </Text>
        </TextWrapper>
        <WhatsAppWrapper>
          <WhatsAppIcon />
          <WhatsAppText>
            Marque uma consulta
          </WhatsAppText>
        </WhatsAppWrapper>
      </BottomContainer>
    </ServicesContainer>
  )
}

export default Services