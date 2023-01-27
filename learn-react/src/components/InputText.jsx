import { useRef, useState } from "react";

function InputText() {
  // React의 훅은 컴포넌트 혹은 커스텀 훅에서만 사용 가능하다.
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });

  // 요소를 저장하기 위해 생성.
  const inputRef = useRef();

  // 상태값 비구조화 할당.
  const { username, email } = inputs;

  const handleInputs = (e) => {
    // e.target.name : input의 name 속성에 지정된 값
    console.log(e.target.name);

    // React의 상태는 불변성(immutable)을 지켜주어야한다.
    // 동적으로 프로퍼티 할당. => ["키값"]
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleReset = () => {
    // 상태값 초기화
    setInputs({
      email: "",
      username: "",
    });

    inputRef.current.focus();
  };

  return (
    <div>
      <p>
        유저 : {username}({email})
      </p>
      <input
        type="text"
        onChange={handleInputs}
        name="username"
        value={username}
        ref={inputRef} // inputRef.current에 저장된다.
      />
      <input type="text" onChange={handleInputs} name="email" value={email} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default InputText;
