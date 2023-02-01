// JS는 함수에 정의된 매개변수보다 전달된 인자가 많아도 오류가 발생 x.
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3, 4));

function sumTotal() {
  // arguments : 전달 모든 인자를 유사배열 형태로 담는다.
  let argArr = Array.from(arguments); // Array.from() : 유사배열(반복가능한)을 배열로 만드는 정적 메서드.
  let result = 0; // 값을 초기화
  argArr.forEach((num) => {
    result += num; // 배열을 돌면서 각 숫자를 result에 산술 할당. => 배열의 reduce로 대체 가능.
  });
  return result; // forEach에서 다 더한 후에 return.
}
console.log(sumTotal(1, 2, 3, 4, 5, 10));

// reduce함수 활용해서 모든 인자 더하기.
// rest 문법    => 매겨변수 앞에 ...을 붙이면 전달된 매개변수를 모두 배열로 모아준다.
//              => rest 매개변수는 가장 뒤에 와야한다.
function getTotal(...nums) {
  // return argArr.reduce((acc, curr) => acc + curr, 0);
  return nums.reduce(sum, 0);
}
console.log("getTotal : %d", getTotal(2, 3, 4));

// 스프레드 연산자 : 배열을 펼치는 효과.
let numArr = [1, 2, 3, 4, 5];
console.log(...numArr); // console.log(1,2,3,4,5). 값 5개를 펼친 효과.
console.log(Math.max(...numArr)); // 전달된 인자 중에 가장 큰 수를 반환.
console.log(getTotal(...numArr));
let newArr = [0, ...numArr, 10]; // 기존 배열을 중간에 복사하는 효과.
console.log(newArr);

// 객체 스프레드 : 객체의 속성들을 펼치는 효과. => 객체 안에다 펼쳐서 사용.
//      => 주로 객체를 복사할 때 사용. 얕은 복사만 된다. 즉, 객체의 속성값이 또 객체면 그건 참조복사가 일어난다.
//      => 깊은 복사를 하려면 키값을 재귀적으로 확인하면서 복사하는 과정이 필요하다.
let obj = {
  name: "seok",
  age: 31,
  foo: {
    bar: "bar",
  },
};
// 참조 복사 : 객체를 할당하면 복사되는 것이 아니라 주소값이 할당된다.
//      => 내용을 변경하면 원본 객체가 변한다.
let copy = obj;
copy.age = 41;
console.log(obj, copy);

let copy02 = { ...obj }; // { name: "seok", age : 31 } 속성을 빈 객체에 펼친 효과.
copy02.age = 31;
copy02.foo.bar = "변경";
console.log(obj, copy02);
console.log(obj === copy02); // obj와 copy02는 다른 객체이다.

// obj 속성들을 속성이름과 같은 이름의 변수로 할당하기.
// let name = obj.name;
// let age = obj.age;
// let foo = obj.foo;

// 비구조화 할당(destructuring) : 배열이나 객체의 값을 변수에 할당할 때 간단하게 표현할 수 있다.
let { name: userName, age, foo, weight } = obj; // 객체 비구조화 할당. {} 안에 객체의 키값을 넣으면 해당 속성값을 같은 이름의 변수로 할당한다.
console.log(userName, age, foo, weight);

let fruits = ["orange", "apple", "banana"];
let [first, second, third] = fruits; // 배열 비구조화 할당. let [] 안에 변수이름은 자유롭게 지으면 배열의 순서대로 할당된다.

console.log(first, second, third);
