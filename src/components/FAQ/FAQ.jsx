import { useState } from 'react';
import DropDown from './DropDown';
import {
  FAQContainer,
  QueryWrapper,
  QueryTitle,
  QuestionWrapper,
  RightSectionWrapper,
  RightSectionTitle,
  BoxWrapper,
  BoxTitleSection,
  Email,
  BoxTitle,
  BoxSubdescription,
  BoxDescription,
  WhatsApp,
  Splash3,
  Splash2
} from './styles';

const Faq = () => {
  const [questions] = useState([
    {
      title: 'Qual a duração de uma sessão de terapia?',
      desc: 'A terapia é um processo de autoconhecimento e desenvolvimento pessoal, que tem como objetivo trazer mais qualidade de vida e bem-estar para o paciente. Através de um espaço de escuta e acolhimento, o paciente é convidado a refletir sobre si mesmo, suas relações e seu contexto, de forma a encontrar novas formas de lidar com suas dificuldades e desafios.'
    },
    {
      title: 'Com que frequência devo comparecer às sessões?',
      desc: 'A terapia é um processo de autoconhecimento e desenvolvimento pessoal, que tem como objetivo trazer mais qualidade de vida e bem-estar para o paciente. Através de um espaço de escuta e acolhimento, o paciente é convidado a refletir sobre si mesmo, suas relações e seu contexto, de forma a encontrar novas formas de lidar com suas dificuldades e desafios.'
    },
    {
      title: 'Quais as formas de pagamento?',
      desc: 'A terapia é um processo de autoconhecimento e desenvolvimento pessoal, que tem como objetivo trazer mais qualidade de vida e bem-estar para o paciente. Através de um espaço de escuta e acolhimento, o paciente é convidado a refletir sobre si mesmo, suas relações e seu contexto, de forma a encontrar novas formas de lidar com suas dificuldades e desafios.'
    },
    {
      title: 'A terapia é confidencial?',
      desc: 'A terapia é um processo de autoconhecimento e desenvolvimento pessoal, que tem como objetivo trazer mais qualidade de vida e bem-estar para o paciente. Através de um espaço de escuta e acolhimento, o paciente é convidado a refletir sobre si mesmo, suas relações e seu contexto, de forma a encontrar novas formas de lidar com suas dificuldades e desafios.'
    }]);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }

    setOpen(index);
  }

  return (
    <FAQContainer>
      <Splash2 />
      <Splash3 />
      <QueryWrapper>
        <QueryTitle>Dúvidas frequentes</QueryTitle>
        <QuestionWrapper>
          {questions.map((question, index) => (
            <DropDown
              key={index}
              title={question.title}
              desc={question.desc}
              open={open === index}
              toggle={() => toggle(index)}
            />
          ))}
        </QuestionWrapper>
      </QueryWrapper>
      <RightSectionWrapper>
        <RightSectionTitle>Ainda com dúvidas? <br />Entre em contato</RightSectionTitle>
        <BoxWrapper>
          <BoxTitleSection>
            <Email />
            <BoxTitle>Email</BoxTitle>
          </BoxTitleSection>
          <BoxSubdescription>
            Enviei sua dúvida por e-mail
          </BoxSubdescription>
          <BoxDescription>
            marianapsi@mailtest.com
          </BoxDescription>
        </BoxWrapper>
        <BoxWrapper>
          <BoxTitleSection>
            <WhatsApp />
            <BoxTitle>WhatsApp</BoxTitle>
          </BoxTitleSection>
          <BoxSubdescription>
            Enviei sua dúvida por e-mail
          </BoxSubdescription>
          <BoxDescription>
            marianapsi@mailtest.com
          </BoxDescription>
        </BoxWrapper>
      </RightSectionWrapper>
    </FAQContainer>
  )
}

export default Faq;