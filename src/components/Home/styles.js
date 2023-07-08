import styled from "styled-components";
import ProfileIMG from "../../assets/profile 2.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Acolhimento from "../../assets/icons/acolhimento.svg";
import Relacionamento from "../../assets/icons/relacionamento.svg";
import Sexualidade from "../../assets/icons/sexualidade.svg";
import Autoconhecimento from "../../assets/icons/autoconhecimento.svg";
import { ReactComponent as Bottom} from "../../assets/bottom.svg"

export const HomeContainer = styled.div`
  margin-top: 6px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  position: relative;
  background: ${({ theme }) => theme.rose_dark_2};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 0;
    padding: 50px 20px;
  }
`;

export const BottomBG = styled(Bottom)`
  position: absolute;
  bottom: -4.5%;
  width: 100%;
  height: 5%;

  & > path {
    fill: ${({ theme }) => theme.rose_dark_2};
  }
`;

export const Image = styled.img.attrs({
  src: ProfileIMG,
})`
  max-width: 500px;

  @media screen and (max-width: 768px) {
    max-width: 70%;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
  max-width: 500px;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.bg_box};
  text-shadow: 0px 5.991482734680176px 70px rgba(255, 255, 255, 0.80);
  font-size: 60px;
  font-family: Gupter;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.bg_box};
  font-size: 20px;
  font-family: Calibri;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.bg_box};
  text-shadow: 0px 5.991482734680176px 20px rgba(255, 255, 255, 0.80);
  font-size: 16px;
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  line-height: 31.43px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const WhatsAppWrapper = styled(Link)`
  display: flex;
  padding: 5px 24px;
  align-items: center;
  gap: 23px;
  border-radius: 35.683px;
  background: ${({ theme }) => theme.rose};
  box-shadow: 0px 4.381547451019287px 0px 0px ${({ theme }) => theme.rose_dark};
  text-decoration: none;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const WhatsAppText = styled.p`
  color: ${({ theme }) => theme.blank};
  font-size: 20px;
  font-family: "Baloo Bhai 2";
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.blank};
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 100px;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  width: 280px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 30px;
  border: 1.33px solid ${({ theme }) => theme.rose_dark};
  background: ${({ theme }) => theme.bg_box};
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.grey};
  text-align: center;

  /* title_card */
  font-size: 20px;
  font-family: Gupter;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;

export const AutoconhecimentoIcon = styled.div`
  background-image: url(${Autoconhecimento});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 35%;
  height: 35%;
`;

export const SexualidadeIcon = styled.div`
  background-image: url(${Sexualidade});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 35%;
  height: 35%;
`;

export const AcolhimentoIcon = styled.div`
  background-image: url(${Acolhimento});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 35%;
  height: 35%;
`;

export const RelacionamentoIcon = styled.div`
  background-image: url(${Relacionamento});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 35%;
  height: 35%;
`;