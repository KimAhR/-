import { useCallback, useMemo, useRef, useState } from "react";
import UserCreate from "./UserCreate";
import UserList from "./UserList";

const countActive = (userList) => {
  console.log("countActive 실행!");
  return userList.filter((user) => user.active).length;
};

const initialState = [
  { id: 1, name: "hbs9312", email: "hbs9312@gmail.com", active: true },
  { id: 2, name: "hasdlk23412", email: "test93@gmail.com", active: false },
  { id: 3, name: "test_user", email: "cocacola@gmail.com", active: false },
];

const initialInputs = {
  email: "",
  name: "",
};

function Users() {
  const [userList, setUserList] = useState(initialState);
  const [inputs, setInputs] = useState(initialInputs);

  // useMemo : 디펜던시에 있는 값이 변했을 때만 연산한다. 변화가 없으면 기존값 재사용.
  const count = useMemo(() => countActive(userList), [userList]);
  console.log(count);

  const { email, name } = inputs;
  // 렌더링과 별개로 유지되는 변수
  const nextId = useRef(4);

  const handleInputs = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    /* 
          스프레드(펼침) 연산자를 이용한 방법.
          setUserList([
          ...userList,
          { id: 4, name: inputs.username, email: inputs.email },
          ]); 
      */
    //  Array.prototype.concat : 인자로 전달된 요소나 배열을 기존 배열에 합쳐서 새로운 배열을 반환
    setUserList((userList) =>
      userList.concat({ id: nextId.current++, name, email })
    ); // 후위 연산자를 이용해서 값을 사용 후 증가
    setInputs(initialInputs);
  }, [name, email]);

  // useCallback : 디펜던시에 있는 값이 변했을 때에만 함수를 재생성. 즉, 성능 개선.
  const handleRemove = useCallback(
    (id) => {
      // 취소시 함수 종료.
      if (!window.confirm("정말 삭제하시겠습니까?")) return;
      // 전달된 id를 가진 유저를 제외한 나머지 유저를 반환.
      setUserList(userList.filter((user) => user.id !== id));
    },
    [userList]
  );

  const handleToggle = useCallback(
    (id) => {
      setUserList(
        userList.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );

      // setUserList(
      //   userList.map(function (user) {
      //     if (user.id === id) return { ...user, active: !user.active };
      //     else return user;
      //   })
      // );
    },
    [userList]
  );

  return (
    <div>
      <UserCreate
        handleSubmit={handleSubmit}
        handleInputs={handleInputs}
        inputs={inputs}
      />
      <UserList
        userList={userList}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default Users;
