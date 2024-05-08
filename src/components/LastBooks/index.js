import { Title } from "../Title";
import { books } from "./books";
import styled from "styled-components";

const LastBooksContainer = styled.section`
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const BooksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  cursor: pointer;
  background-image: linear-gradient(90deg, #f6d365 0%, #fda085 100%);
  padding: 20px 0;
`;

function LastBooks() {
  return (
    <LastBooksContainer>
      <Title color="#EB9B00">Últimos livros</Title>
      <BooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.title} />
        ))}
      </BooksContainer>
    </LastBooksContainer>
  );
}

export default LastBooks;
