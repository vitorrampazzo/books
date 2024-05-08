import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./books";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #f6d365 0%, #fda085 100%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Book = styled.div`
  h2 {
    font-size: 28px;
  }

  p {
    width: 200px;
    font-size: 18px;
    fnot-weight: 700;
    justify-content: center;
    display: flex;
  }

  img {
    width: 100px;
  }
`;

function Search({ title }) {
  const [searchedBook, setSearchedBook] = useState([]);

  function FindBook(searchBook) {
    const result = books.filter((book) => book.title.includes(searchBook));
    return result;
  }

  return (
    <SearchContainer>
      <Title>{title}</Title>
      <SubTitle>Encontre seu livro em nossa estante</SubTitle>
      <Input
        placeholder="Digite o nome do seu livro"
        onBlur={(text) => {
          const searchBook = text.target.value;
          const result = FindBook(searchBook);
          setSearchedBook(result);
        }}
      />
      <Result>
        {searchedBook.map((book) => (
          <Book key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <img src={book.src} alt={book.title} />
          </Book>
        ))}
      </Result>
    </SearchContainer>
  );
}

export default Search;
