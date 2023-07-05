import styled from "styled-components";
import BG from "../../assets/BG_Home.png";
import MaskBG from "../../assets/Mask_BG_Home.svg";
import ProfileIMG from "../../assets/profile 2.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Acolhimento from "../../assets/acolhimento.svg";
import Relacionamento from "../../assets/relacionamento.svg";
import Sexualidade from "../../assets/sexualidade.svg";
import Autoconhecimento from "../../assets/autoconhecimento.svg";

export const HomeContainer = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1100px;
  position: relative;
`;

export const BGHome = styled.div`
  background-image: url(${BG});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  transform: scaleX(-1);
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Mask = styled.div`
  background-image: url(${MaskBG});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  transform: scaleX(-1);
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Person = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 55px;
`;

export const Image = styled.img.attrs({
  src: ProfileIMG,
})`
  width: 35%;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 35%;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.bg_box};
  text-shadow: 0px 5.991482734680176px 116.83391571044922px 0px rgba(255, 255, 255, 0.80);
  font-size: 50px;
  font-family: Gupter;
  font-style: normal;
  font-weight: 700;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.bg_box};
  font-size: 25px;
  font-family: Calibri;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.bg_box};
  text-shadow: 0px 2.285831928253174px 44.5737190246582px 0px rgba(255, 255, 255, 0.80);
  font-size: 20px;
  font-family: Calibri;
  font-style: normal;
  font-weight: 400;
  line-height: 31.43px;
`;

export const WhatsAppWrapper = styled(Link)`
  display: flex;
  padding: 10px 24px;
  align-items: center;
  gap: 23px;
  border-radius: 35.683px;
  background: ${({ theme }) => theme.rose};
  box-shadow: 0px 4.381547451019287px 0px 0px ${({ theme }) => theme.rose_dark};
  text-decoration: none;
`;

export const WhatsAppText = styled.p`
  color: ${({ theme }) => theme.blank};
  font-size: 20px;
  font-family: "Baloo Bhai 2";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.blank};
  font-size: 30px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
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