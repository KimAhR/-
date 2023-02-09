import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./component/common/Header";
import { Router } from "./router";
import { theme } from "./styles";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("login");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background: #eee;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export default App;
