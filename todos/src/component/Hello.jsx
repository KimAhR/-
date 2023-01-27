import styles from "../hello.module.css";
import styled from "styled-components";
// module.css 확장자를 사용하고 import하면 정의해놓은 클래스들을 프로퍼티로 제공한다.
//      => 해쉬값을 더해서 클래스의 중복을 방지한다.

function Hello() {
  return (
    <div className={`${styles.container} ${styles.big}`}>
      <h1>Hello React</h1>
    </div>
  );
}

const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
`;

export default Hello;
