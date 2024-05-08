import profile from "../../../assets/perfil.svg";
import cart from "../../../assets/sacola.svg";
import styled from "styled-components";

const Icons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

function IconsHeader() {
  const icons = [profile, cart];

  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt="icon" />
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
