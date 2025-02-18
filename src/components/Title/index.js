import styled from "styled-components";

export const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #efefef;
  color: ${(props) => props.color || "#000"};
  font-size: 36px;
  text-align: center;
  margin: 0;
`;
