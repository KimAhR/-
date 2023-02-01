/* 
    동기(Synchronous)와 비동기(Asynchronous)
        - 동기적 : 결과값을 기다린다.
        - 비동기적 : 결과값을 기다리지 않는다.
            => 비동기 처리를 위해서는 콜백함수로 처리하는 가장 기본적이다.
            => 비동기 처리가 중첩되는 굉장히 복잡해진다.
        - JS는 싱글 스레드 기반의 논블로킹 언어다.
*/

function sum(a, b) {
  return a + b;
}

function printNum(callback) {
  let result = callback();
  console.log(result);
}

// sum함수의 실행을 기다려야 한다.
printNum(() => sum(2, 3));
/* 
    스켈줄링 함수
        - 스케줄을 등록하는 함수.
            => 일정 시간 후에 등록한 콜백함수를 실행하거나, 일정 시간마다 실행한다.
        
    setTimeout(콜백함수, 지연시간)
        - 일정 시간 후에 콜백함수를 실행한다.
        - 스케줄링 자체는 브라우저가 담당하고, JS 등록만 한다.
        - 실행 결과를 기다리지 않고 다음 코드를 실행한다.


            
*/
console.log("실행");
setTimeout(function () {
  console.log("2초 경과");
}, 2000);
console.log("실행 완료");

let data = null;
function getData(data, callback) {
  setTimeout(function () {
    // 서버에서 데이터를 받아온다고 가정. 2초.
    callback(data);
  }, 2000);
}

getData("슬램덩크", render);

function render(data) {
  console.log(data + " 렌더링!");
}

/* 
    프로미스(Promise)
        - 비동기 처리를 쉽게 도와주는 객체.
        - 객체 생성시 함수를 전달받는데 그 함수의 첫번째 인자는 resolve 함수, 두번째는 reject함수
        - resolve는 성공했을 때 실행할 함수.
            => resolve가 된 상태를 fulfilled 상태.
            => Promise.prototype.then(콜백함수) : resolve된 이후에 실행된다. 
            => 콜백함수의 첫번째 인자로 resolve된 값을 전달한다.
        - reject : 실패했을 때 실행할 함수.
            => reject("이유") : 에러를 발생시킨다.
            => Promise.prototype.catch(콜백함수 ) : reject된 이후에 실행된다.
            => reject된 이유가 콜백함수의 첫번째 매개변수로 전달된다.
        - resolve나 reject되기 전 상태 pending 상태.
        - API 통신을 하면 Promise로 결과값을 받게 된다.
*/
let data02 = "데이터";
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 데이터가 null일 경우 에러 발생
    if (!data02) {
      reject("찾는 데이터가 없습니다.");
    }

    resolve("데이터");
  }, 2000);
});

promise
  .then((res) => {
    console.log("result: " + res);
  })
  .catch((err) => {
    alert(err);
  });

// 서버에서 데이터를 받아서 화면에 그리는 상황 가정.
let movieList = [
  {
    id: 1,
    title: "더 퍼스트 슬램덩크",
    actors: ["강백호", "서태웅", "정대만", "채치수", "안경선배"],
  },
  {
    id: 2,
    title: "아바타:물의 길",
    actors: ["조 샐다나", "샘 워싱턴", "시고니 위버"],
  },
  { id: 3, title: "유령", actors: ["설경구", "이하늬", "박소담"] },
  { id: 4, title: "아바타", actors: [] },
];

function getMovieById(id) {
  console.log("서버에서 데이터 검색 중...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let movie = movieList.find((movie) => movie.id === id);

      if (!movie) {
        reject("찾는 영화가 없습니다.");
      }

      resolve(movie);
    }, 2000);
  });
}

getMovieById(3)
  .then((res) => {
    console.log("데이터 조회 성공!");
    console.log(res);
  })
  .catch((err) => {
    alert(err);
  });

/* 
  1. input 태그값 alert창 => form 태그의 submit 이벤트가 발생했을 때
  2. 가져온 값으로 영화 검색하는 함수.
  3. 가져오는데 성공하면 화면에 보여주기.
*/
let inputTitle = document.getElementById("inputTitle");
let movieForm = document.querySelector("form");

movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputTitle.value === "") {
    // 빈문자 입력하면 경고창 출력 후 함수 종료.
    alert("검색어를 입력해주세요.");
    return;
  }

  renderMovie02(inputTitle.value);

  // getMovieByTitle(inputTitle.value)
  //   .then((res) => {
  //     // ul태그 비우기
  //     document.querySelector(".movieZIP").innerHTML = "";
  //     // 받아온 데이터(배열)을 순회하며 renderMovie 실행
  //     res.forEach((movie) => {
  //       renderMovie(movie);
  //     });
  //   })
  //   .catch((err) => alert(err));
});

function getMovieByTitle(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = movieList.filter((movie) => movie.title.includes(title));

      if (data.length === 0) {
        reject("찾는 영화가 없습니다.");
      }

      resolve(data);
    }, 500);
  });
}

function renderMovie(movie) {
  document.querySelector(".movieZIP").innerHTML += `
  <li>
    <h2>${movie.title}</h2>
    <p>출연진 : ${movie.actors}</p>
  </li>
  `;
}

/* 
  async/await
    - 프로미스를 동기적으로 처리하는 함수.
    - async 함수 내부에서 Promise를 반환하는 함수 앞에 await을 붙이면,
      resolve되기 전까지 이후의 코드를 실행하지 않는다.
    - Promise를 처리할 때 동기적으로 볼 수 있게 작성할 수 있어서 읽기가 편하다.
    - async 함수에서 값을 return 하면 return 값을 resolve하는 Promise가 반환된다.
*/

async function renderMovie02(title) {
  // Promise가 resolve 될 때까지 다음 코드를 실행하지 않는다. => 동기 코드처럼 동작한다.
  try {
    let result = await getMovieByTitle(title);

    let movieZIP = document.querySelector(".movieZIP");
    movieZIP.innerHTML = "";
    result.forEach((movie) => {
      movieZIP.innerHTML += `
        <li>
          <h2>${movie.title}</h2>
          <p>${movie.actors}</h2>
        </li>
      `;
    });
    return 1;
  } catch (e) {
    // try/catch(e) : try문의 코드를 실행하다 에러가 발생하면 catch문이 실행된다.
    alert(e);
  }
}

let result = renderMovie02("슬램");
console.log("async result : ", result);
