import styled from "styled-components";
import LeafIMG from "../../assets/leaf.png";

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
    width: 150px;
  }
`;