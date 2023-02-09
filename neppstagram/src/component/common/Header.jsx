import { useState } from "react";
import styled from "styled-components";
import InptutBox from "./InptutBox";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");
  return (
    <Container>
      <Wrapper>
        <h1>Neppstagram</h1>
        <InptutBox hide={input !== ""} Placeholder="">
          <input type="text" onChange={(e) => setInput(e.target.value)} />
        </InptutBox>
        <Gnb>
          <GnbList>
            <li>
              <Link to="home">
                <AiOutlineHome />
              </Link>
            </li>
            <li>
              <Link to="search">
                <AiOutlineUser />
              </Link>
            </li>
            <li>
              <Link to="profile">
                <AiOutlineSearch />
              </Link>
            </li>
          </GnbList>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg_color};
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start; //flex-start안해주면 stretch로 기본값이라서 늘어나게됨
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
`;

const Gnb = styled.nav``;

const GnbList = styled.ul`
  display: flex;
  gap: 10px;
`;

export default Header;
