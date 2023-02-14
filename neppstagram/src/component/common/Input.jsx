import styled from "styled-components";

function Input({ type, name, placeholder, onChange, value }) {
  return (
    <Container>
      {value !== "" || <Placeholder>{placeholder}</Placeholder>}
      <input type={type} name={name} onChange={onChange} value={value} />
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  width: ${({ width }) => width || 200}px;
  height: 25px;
  position: relative;
  input {
    width: 100%;
    height: 25px;
    line-height: 25px;
    outline: none;
    border: none;
    padding: 5px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: #aaa;
  user-select: none;
  padding: 0 5px;
  font-size: 10px;
`;

Input.defaultProps = {
  type: "text",
};

export default Input;
