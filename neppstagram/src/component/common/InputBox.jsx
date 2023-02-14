import styled from "styled-components";

function InputBox({ children, hide, placeholder }) {
  return (
    <Container>
      {hide || <Placeholder>{placeholder}</Placeholder>}
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  position: relative;

  height: 25px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    padding: 0 5px;
  }

  & + & {
    margin-top: 3px;
  }
`;

const Placeholder = styled.div`
  color: #aaa;
  user-select: none;
  padding: 0 5px;
`;

export default InputBox;
