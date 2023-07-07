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
`;

export const DotsSVG = styled(dots)`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 5%;
`;

export const FlowersImage = styled.img.attrs({
  src: Flowers,
})`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  max-width: 500px;
`;

export const Image = styled.img.attrs({
  src: UserImage,
})`
  min-width: 285px;
  max-width: 600px;
  border-radius: 227px 0px 225px 0px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 285px;
    height: 285px;
    background-color: ${({ theme }) => theme.rose};
  }
`;