let instance = axios.create({
  baseURL: "http://101.101.218.43/",
});

// 내보내기.
export async function postUserAxios(e) {
  console.log("실행");
  e.preventDefault(); // form 태그 기본 기능 막기.

  let email = document.getElementById("email").value;
  let name = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  try {
    // 키값과 할당하는 값의 변수명이 같으면 생략할 수 있다.
    let result = await instance.post("/users", {
      email,
      name,
      password,
    });
    if (result.status === 201) {
      // 회원가입 성공시 로그인 페이지로 이동
      alert("회원가입에 성공했습니다.");
      window.location.href = "./login.html";
    }
  } catch (e) {
    console.log(e);
  }
}

export async function login(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = await instance.post("/users/login", {
    email,
    password,
  });

  if (result.status === 201) {
    // 토큰값 로컬 스토리지 저장.
    localStorage.setItem("access-token", result.data.data.token);
    window.location.href = "./index.html";
  }
  // 로그인 성공시 index.html로 이동하기
}

export async function getUsers(page) {
  // 토큰값 읽어오기
  let token = localStorage.getItem("access-token");
  let result = await instance.get(`/users?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // 받아온 데이터(배열) 돌면서 화면에 유저목록 렌더링
  result.data.data.forEach((user) => {
    document.body.innerHTML += `<div class="userItem">
      <div class="imgBox">
        <img src="${user.profile_url}" >
      </div>
      ${user.name}(${user.email})
    </div>`;
  });
}
