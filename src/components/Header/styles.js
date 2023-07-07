import styled from "styled-components";
import Logo from "../../assets/Logo.svg"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 27px;
  justify-content: space-between;
`;

export const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

export const LocalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.rose};
  font-family: "Baloo Bhai 2";
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;