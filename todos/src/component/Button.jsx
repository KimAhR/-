import styled, { css } from "styled-components";

function Button({ text, bgColor, big }) {
  return (
    <Container bgColor={bgColor} big={big}>
      {text}
    </Container>
  );
}

const Container = styled.div`
  width: 100px;
  padding: 5px 0;

  background-color: ${({ bgColor }) => bgColor || "black"};

  color: #fff;
  text-align: center;

  border-radius: 4px;
  & + & {
    margin-top: 5px;
  }

  // css : 여러개의 속성을 한번에 덮어씌울 때 사용한다.

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      padding: 8px 0;
      font-size: 1.2rem;
    `}
`;

export default Button;
