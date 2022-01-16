import { Li, StyledNav } from "./Nav.style";

export const Nav = () => {
  return (
    <StyledNav>
      <div>
        <Li>
          <a href="#home">home</a>
        </Li>
        <Li>
          <a href="#ministries">ministries</a>
        </Li>
        <Li>
          <a href="#about">about</a>
        </Li>
      </div>
    </StyledNav>
  );
};
