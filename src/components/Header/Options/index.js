import styled from "styled-components";

const Options = styled.ul`
  display: flex;

  li {
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 5px;
    cursor: pointer;
  }
`;

function OptionsHeader() {
  const optionsText = ["Categorias", "Minha Estante", "Favoritos"];

  return (
    <Options>
      {optionsText.map((option, index) => (
        <li key={index}>
          <p>{option}</p>
        </li>
      ))}
    </Options>
  );
}

export default OptionsHeader;
