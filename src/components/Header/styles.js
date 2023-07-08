import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 27px;
  justify-content: space-between;

  & .hamburger-react {
    display: none;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    position: absolute;
    align-items: center;
    padding: 15px;
    z-index: 999;

    & > .hamburger-react {
      display: block;
    }
  }
`;

export const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 15vw;
    height: 15vw;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LocalTelSection = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const LocalWrapper = styled(LinkRouter)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;

export const LocalIcon = styled(CiLocationOn)`
  font-size: 20px;
  color: ${({ theme }) => theme.rose};
`;

export const TelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TelIcon = styled(BsTelephone)`
  font-size: 20px;
  color: ${({ theme }) => theme.rose};
`;

export const RightText = styled.p`
  color: ${({ theme }) => theme.grey};
  font-family: "Baloo Bhai 2";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 28px;
`;

export const NavLink = styled.li`
  list-style: none;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.rose};
    font-family: "Baloo Bhai 2";
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    user-select: none;
  }
`;