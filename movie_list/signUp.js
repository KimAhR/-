// 가져오기
import { postUserAxios } from "./admin.js";

async function postUser(e) {
  console.log("실행");
  e.preventDefault(); // form 태그 기본 기능 막기.

  let emailVal = document.getElementById("email").value;
  let userNameVal = document.getElementById("userName").value;
  let passwordVal = document.getElementById("password").value;

  try {
    let result = await fetch("http://101.101.218.43/users", {
      // header : 요청을 하는데 필요한 데이터에 대한 정보.
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      // body : 서버가 필요로 하는 데이터
      body: JSON.stringify({
        email: emailVal,
        name: userNameVal,
        password: passwordVal,
      }),
    });

    let json = await result.json();

    console.log(json);

    if (json.statusCode === 400) {
      throw new Error(json.message);
    }
  } catch (e) {
    console.log(e);
  }
}

async function postSignIn() {}

document.getElementById("signUpForm").addEventListener("submit", postUserAxios);
