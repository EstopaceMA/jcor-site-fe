import styled from "styled-components";
import bg from "../../assets/images/bg.jpeg";

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutSectionContainer = styled.div`
  margin-top: 80px;
  min-width: 1280px;
  height: auto;
`;

export const AboutSectionHeadline = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutSectionContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`;

export const AboutCard = styled.div`
  height: 380px;
  width: 411px;
  background-color: #fef5ec;
  border-bottom: 16px solid #f8d4aa;
`;

export const AboutCardFooter = styled.div`
  position: absolute;

  height: 16px;
  width: 100%;
`;

export const SubHeadline = styled.p`
  font-size: 10px;
`;

export const Headline = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
`;

export const HomeSection = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  transform: scaleX(-1);
  background-size: cover;
  display: flex;
  justify-content: flex-end;
`;

export const HomeContentContainer = styled.div`
  position: absolute;
  width: 70vh;
  height: 60vh;
  margin-top: 80px;
  right: 200px;
  top: 250px;
  transform: scaleX(-1);
`;

export const Button = styled.button`
  background: #ffd2a4;
  color: #1c1d28;
  height: 46px;
  width: 160px;
  border-radius: 12px;
  text-transform: uppercase;
  margin-top: 80px;
`;
