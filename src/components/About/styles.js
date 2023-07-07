import styled from "styled-components";
import { ReactComponent as dots } from "../../assets/dots.svg"
import Flowers from "../../assets/flowers01.png";
import UserImage from "../../assets/user2.png";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  position: relative;
  width: 100%;
  gap: 50px 115px;
  margin-bottom: 170px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const DotsSVG = styled(dots)`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FlowersImage = styled.img.attrs({
  src: Flowers,
})`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  font-family: "Gupter";
  color: ${({ theme }) => theme.rose_dark};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 65%;
    height: 5px;
    background-color: ${({ theme }) => theme.rose_dark};
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Calibri";
  color: ${({ theme }) => theme.grey};

  & > span {
    font-weight: 700;
  }

  /* @media screen and (max-width: 768px) {
    text-align: justify;
  } */
`;

export const ImageWrapper = styled.div`
  min-width: 285px;
  max-width: 500px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const Image = styled.img.attrs({
  src: UserImage,
})`
  width: 100%;
  height: auto;
  border-radius: 27% 0px 27% 0px;
`;

export const ImageBorder = styled.div`
  position: absolute;
  top: 0;
  left: -5%;
  width: 100%;
  height: 97%;
  border-radius: 27% 0px 27% 0px;
  border: 3px solid ${({ theme }) => theme.rose};
  z-index: -1;
`;