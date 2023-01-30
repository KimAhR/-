import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

function Section() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleIndex = (e) => {
      e.preventDefault();
      // 스크롤 중이라면 함수 종료
      if (isScrolling.current) return;
      isScrolling.current = true; // 스크롤 중임을 명시
      setTimeout(() => {
        isScrolling.current = false; // 스크롤이 끝날 쯤에 다시 스크롤 false로
      }, 500);

      // e.deltaY : 휠 방향에 따라 양수(내림)/음수(올림)
      if (e.deltaY > 0) {
        if (index < 2) setIndex(index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    };
    // window.scrollTo() : 스크롤바를 움직이는 메서드
    // window.innerHeight : 뷰포트 높이
    window.addEventListener("wheel", handleIndex, { passive: false });

    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    // 뒷정리 함수
    console.log(window);
    // 다음 렌더링 직전에 실행.
    return () =>
      window.removeEventListener("wheel", handleIndex, { passive: false });
  }, [index]);

  // 버튼 클릭시 인덱스 변경
  const handleIndexBtn = (index) => {
    setIndex(index);
  };
  return (
    <Container>
      <SectionItem bgColor="red">1</SectionItem>
      <SectionItem bgColor="blue">2</SectionItem>
      <SectionItem bgColor="yellow">3</SectionItem>
      <Btns>
        <BtnPage onClick={() => handleIndexBtn(0)} active={index === 0} />
        <BtnPage onClick={() => handleIndexBtn(1)} active={index === 1} />
        <BtnPage onClick={() => handleIndexBtn(2)} active={index === 2} />
      </Btns>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;
  color: #fff;

  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

const Btns = styled.div`
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

const BtnPage = styled.div`
  /* 버튼 모양 */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.4s;

  cursor: pointer;

  /* 버튼에 호버시 배경색 하얀색으로, 크기 1.2배 */
  &:hover {
    transform: scale(1.2);
    background-color: #fff;
  }

  /* 버튼끼리 여백 */
  & + & {
    margin-top: 10px;
  }

  /* 인덱스에 해당하는 버튼 크게, 하얗게 */
  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
      transform: scale(1.2);
    `}
`;

export default Section;
