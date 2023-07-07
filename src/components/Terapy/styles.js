import styled from "styled-components";
import LeafIMG from "../../assets/leaf.png";
import Splash_1 from "../../assets/splash1.png";
import Splash_2 from "../../assets/splash2.png";

export const TerapyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  font-family: "Gupter";
  color: ${({ theme }) => theme.rose_dark};
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.rose_dark};
  }

  @media screen and (max-width: 768px) {
    &::after {
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 50px 0;
  background: ${({ theme }) => theme.rose_2};
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 400;
  font-family: "Gupter";
  color: ${({ theme }) => theme.grey};
  text-align: justify;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Glow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10%;
  height: 150px;
  background: ${({ theme }) => theme.rose_dark};
  border-radius: 384px;
  filter: blur(113.27437591552734px);
`;

export const Leaf = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 250px;
  height: 100%;
  background-image: url(${LeafIMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 45px;
  min-height: 1000px;
  width: 100%;
  position: relative;
  padding: 50px 390px;

  @media screen and (max-width: 1541px) {
    padding: 50px 290px;
  }

  @media screen and (max-width: 1342px) {
    padding: 50px 190px;
  }

  @media screen and (max-width: 1142px) {
    padding: 50px 90px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 10px;
  }
`;

export const Splash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-image: url(${Splash_1});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Splash2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-image: url(${Splash_2});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 350px;
  padding: 30px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.rose_dark};
  position: relative;
  z-index: 2;

  &:nth-child(1) {
    box-shadow: 12px 9px 30px 0px rgba(0, 0, 0, 0.25);
  }

  &:nth-child(2) {
    box-shadow: -12px 9px 30px 0px rgba(0, 0, 0, 0.25);
  }

  &:nth-child(3) {
    box-shadow: 12px -9px 30px 0px rgba(0, 0, 0, 0.25);
  }

  &:nth-child(4) {
    box-shadow: -12px -9px 30px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  font-family: "Gupter";
  color: ${({ theme }) => theme.blank};
`;

export const BoxText = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Gupter";
  color: ${({ theme }) => theme.blank};
  text-align: left;
`;