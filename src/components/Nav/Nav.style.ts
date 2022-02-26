import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background-color: #161722;
  display: flex;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  // background-color: blue;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabsContainer = styled.div`
  // background-color: red;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightItemContainer = styled.div`
  // background-color: green;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabLabelsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const TabLabel = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  padding-left: 20px;
  color: #fff;
  cursor: pointer;
`;

export const ContactButton = styled.button`
  background: #ffd2a4;
  color: #1c1d28;
  height: 46px;
  width: 160px;
  border-radius: 12px;
  text-transform: uppercase;
  margin-left: 130px;
`;

export const LogoLabel = styled.p`
  font-size: 25px;
  line-height: 19px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  color: #fff;
  cursor: pointer;
`;
