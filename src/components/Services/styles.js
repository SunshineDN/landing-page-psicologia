import styled from 'styled-components';
import { ReactComponent as AgendaIcon } from '../../assets/icons/agenda.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg';
import { ReactComponent as OnlineIcon } from '../../assets/icons/online.svg';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';


export const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  gap: 20px 0px;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.rose_2};

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
    gap: 20px 0px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px 0;
    width: 100%;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.grey};
  font-size: 24px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-variant: all-small-caps;
  width: 160px;
`;

export const Agenda = styled(AgendaIcon)`
  width: 50px;
  height: 50px;
`;

export const Clock = styled(ClockIcon)`
  width: 50px;
  height: 50px;
`;

export const Online = styled(OnlineIcon)`
  width: 50px;
  height: 50px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px 0;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`;

export const BottomTitle = styled.h2`
  color: ${({ theme }) => theme.rose_dark};
  text-shadow: 0px 5.7398457527160645px 20px rgba(255, 255, 255, 0.80);
  font-family: "Gupter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.grey};
  text-shadow: 0px 5.6875739097595215px 20px rgba(255, 255, 255, 0.80);
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
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
`;

export const WhatsAppText = styled.p`
  color: ${({ theme }) => theme.blank};
  font-size: 20px;
  font-family: "Baloo Bhai 2";
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.blank};
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;