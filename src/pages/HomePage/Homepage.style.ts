import styled from "styled-components";
import bg from "../../assets/images/bg.jpeg";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
