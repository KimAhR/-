import styled from "styled-components";
import TitleBox from "../TitleBox";

function Home() {
  return (
    <Container>
      <TitleBox title={"트렌딩"} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
export default Home;
