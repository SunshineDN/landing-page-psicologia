import styled from "styled-components";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { ReactComponent as EmailIcon} from "../../assets/icons/email.svg";
import { FaWhatsapp } from "react-icons/fa";
import SplashOverlay2 from "../../assets/splash2.png";
import SplashOverlay3 from "../../assets/splash3.png";

export const FAQContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 1100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  z-index: 1;
  gap: 0 200px;
  flex-wrap: wrap;
  padding: 60px 20px;
`;

export const QueryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 20px;
  background-color: ${({ theme }) => theme.rose_2};
  border-radius: 10px;
  padding: 50px;

  @media screen and (max-width: 1148px) {
    margin-bottom: 40px;
  }
`;

export const QueryTitle = styled.h2`
  font-family: "Gupter";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;

  & .ReactCollapse--collapse {
    position: relative;
    top: -20px;
    transition: height 500ms;
    background-color: ${({ theme }) => theme.blank};
    border-radius: 10px;
    box-shadow: 11.25266170501709px 8.439496994018555px 20px rgba(0, 0, 0, 0.25);
    z-index: -1;
  }
`;

export const QuestionTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.rose_dark};
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  
`;

export const Question = styled.h3`
  font-family: "Calibri";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.blank};
`;

export const Answer = styled.p`
  font-family: "Calibri";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.grey};
  padding: 20px;
`;

export const AddButton = styled(IoMdAdd)`
  font-size: 30px;
  color: ${({ theme }) => theme.blank};
`;

export const RemoveButton = styled(IoMdRemove)`
  font-size: 30px;
  color: ${({ theme }) => theme.blank};
`;

export const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const RightSectionTitle = styled.h2`
  font-family: "Calibri";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
  text-align: left;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 31px 27px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: ${({ theme }) => theme.blank};
  border-radius: 10px;
  box-shadow: 11.25266170501709px 8.439496994018555px 20px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.rose_dark};
`;

export const BoxTitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Email = styled(EmailIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.rose_dark};
`;

export const WhatsApp = styled(FaWhatsapp)`
  font-size: 30px;
  color: ${({ theme }) => theme.rose_dark};
`;

export const BoxTitle = styled.h3`
  font-family: "Calibri";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
`;

export const BoxDescription = styled.p`
  font-family: "Calibri";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
`;

export const BoxSubdescription = styled.p`
  font-family: "Calibri";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.grey};
`;

export const Splash2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  background-image: url(${SplashOverlay2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Splash3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  height: 100%;
  background-image: url(${SplashOverlay3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.3;
`;