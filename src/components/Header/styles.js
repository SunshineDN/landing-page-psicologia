import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 27px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;