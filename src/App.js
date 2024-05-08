import Header from "./components/Header";
import styled from "styled-components";
import Search from "./components/Search";
import LastBooks from "./components/LastBooks";

const AppContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(90deg, #f6d365 0%, #fda085 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search title="Já sabe por onde começar?" />
      <LastBooks />
    </AppContainer>
  );
}

export default App;
