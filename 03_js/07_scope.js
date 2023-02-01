/* 
    유효 범위(scope)
        전역 스코프 
            - 어디서든 접근 가능한 범위
            - JS 기본적으로 여러개 파일이 하나로 동작하기 같은 전역 스코프를 가진다.
        
        지역 스코프
            - 조건문, 반복문, 함수 등의 지역 내에서만 유효한 범위
            - 현재 스코프에서 없는 식별자를 참조하면 상위 스코프에서 찾는다. 전역스코프까지 찾아서 없으면 그 때 오류 발생.
                => 스코프 체이닝.
            - var 변수는 코드 블록 스코프를 지원하지 않고 함수 스코프만 지원한다.
*/
let globalNum = 10;

function addGlobalNum(a) {
  return a + globalNum;
}
// console.log(a); addGlobalNum의 매개 변수 a는 함수 내부에서 유효하기 때문에 밖에서는 접근할 수 없다.

console.log(addGlobalNum(3));

function foo() {
  let num = 10;

  function bar() {
    let num = 100;
    console.log(num);
  }
}

// var는 블록 스코프를 지원하지 않기 때문에 전역 변수를 선언한 것과 마찬가지.
var i = 20;
for (var i = 0; i < 10; i++) {}
console.log(i);
{
  var i = 100;
}
console.log(i);
{
  // let 키워드는 블록 스코프를 지원한다.
  let b = 100;
}

let b = 10;
