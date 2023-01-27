import styled, { keyframes } from "styled-components";

function Container({ bgColor }) {
  return (
    <>
      <BigBox bgColor={bgColor}>Box</BigBox>
    </>
  );
}

// 애니메이션 정의
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// styled.태그명`` : `` scss 문법대로 작성
//      => 컴포넌트에 스타일도 함께 작성 가능해서 하나의 파일로 관리할 수 있다.
//      => 클래스 중복 신경쓰지 않아도 된다.
//      => 동적으로 값 바꾸기가 용이하다.
//      => 태그명을 통해서 직관적으로 알기 쉽다.

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.main_color};
  animation: ${fadeIn} 1s 2;

  &:active {
    color: ${({ theme }) => theme.colors.active_color};
  }

  @media (max-width: 500px) {
    width: 200px;
  }
`;

// 기존 컴포넌트의 특정 값 덮어 씌우기
const BigBox = styled(Box)`
  width: 300px;
  height: 300px;
`;

export default Container;
