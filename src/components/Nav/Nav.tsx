import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  StyledNav,
  LogoContainer,
  TabsContainer,
  RightItemContainer,
  TabLabel,
  TabLabelsContainer,
  ContactButton,
  LogoLabel,
} from "./Nav.style";

export const Nav = () => {
  return (
    <StyledNav>
      <LogoContainer>
        <LogoLabel>{`{JCOR}`}</LogoLabel>
      </LogoContainer>
      <TabsContainer>
        <TabLabelsContainer>
          <TabLabel>HOME</TabLabel>
          <TabLabel>ABOUT US</TabLabel>
          <TabLabel>SERMON</TabLabel>
          <TabLabel>BLOG</TabLabel>
        </TabLabelsContainer>
      </TabsContainer>
      <RightItemContainer>
        <ContactButton> CONTACT US </ContactButton>
      </RightItemContainer>
    </StyledNav>
  );
};
