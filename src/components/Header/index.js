import Logo from "../Logo";
import IconsHeader from "./Icons";
import OptionsHeader from "./Options";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-around;

  li {
    list-style: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

export default Header;
