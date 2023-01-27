// 컴포넌트의 첫번째 매개변수로 props 객체가 전달된다.
//      => 비구조화 할당을 통해 간추릴 수 있다.
function Hello({ title, children, color }) {
  return (
    <div>
      <h1 style={{ color, backgroundColor: "rgba(0,0,0,0.4)", fontSize: 10 }}>
        Hello {title}
      </h1>
      {children}
      <input type="text" />
      <img src="" alt="" />
    </div>
  );
}

// props가 전달되지 않았을 때 적용한 기본 값.
Hello.defaultProps = {
  title: "리액트",
  color: "red",
};

export default Hello;
