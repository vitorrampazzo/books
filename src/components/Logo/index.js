import logo from "../../assets/logo.svg";
import styled from "styled-components";

const Brand = styled.div`
  display: flex;
  font-size: 30px;
  margin-left: 10px;

  img {
    margin-right: 10px;
  }
`;

function Logo() {
  return (
    <Brand>
      <img src={logo} alt="logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </Brand>
  );
}

export default Logo;
