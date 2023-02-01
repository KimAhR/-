// 02_data_type.js

/* 
    표현식 : 어떠한 값으로 평가돼서 새로운 값을 생성.
        => 값으로 평가되는 모든 것은 식.
*/
var result = 10 + 30;

// 문 : 프로그램이 실행되는 최소 단위. 식은 포함되는 개념.
var x;

/* 
    자료형 : 프로그램이 처리할 수 있는 자료의 형태.
*/

// 숫자형(number) : 숫자를 나타내는 데이터.
var year = 2023;
var PI = 3.14;
console.log(typeof year); // number

// 문자열(string) : 문자를 나타내는 데이터. "" 혹은 '' 사이에 문자를 작성.
console.log(year, "year");
console.log(typeof "year"); // string
console.log(typeof 1, typeof "1"); // 숫자 1과 문자 "1"은 다른 값이다.
console.log(1 + "1"); // JS에서는 문자열과 숫자의 연산에서 오류 발생 x.

// 논리형(boolean) : 참과 거짓으로 표현되는 자료형. => true(1), false(0)
var isTrue = true;
console.log(isTrue);

// 조건식의 결과에 따라 true 혹은 false 반환. => 조건문에 사용된다.
var isBig = 10 < PI;
console.log(isBig);
console.log(typeof isBig);

/* 
    undefined와 null
        - undefined는 참조를 했는데 값이 없을 경우.
        - null은 개발자가 의도적으로 유효하지 않은 값이라고 알려주는 경우.
        - 조건문에서 false처럼 동작한다.
*/

/* 
    배열(Array)
        - 여러개의 데이터를 저장하는 형태. => JS 다른 형태의 데이터도 한 배열에 할당 가능.
        - 인덱스(순서)로 데이터에 접근. 순서는 0부터 시작한다. 즉, 첫번째는 0, 두번재는 1...
        - 배열[인덱스]의 형태로 접근할 때 [] 안에 숫자로 평가되는 식 사용 가능.
*/

var fruits = ["apple", "orange", "banana", 1];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[10 - 9]);

/* 
    객체(object)
        - 키(key)-값(value) 쌍으로 데이터를 저장. => 프로퍼티
        - 다양한 프로퍼티를 통해서 고유한 정보와 동작.
        - "객체.키"의 형태로 값을 참조한다.
            => "객체["키(문자열)"]"
        - 없는 프로퍼티를 참조하면 undefined를 반환한다.
*/

var user = {
  name: "seok",
  age: 31,
};
console.log(user.name, user["age"], user.height);

// age 40, height 190, name 정철 user02, age 33 height 179 민수 user03
// 두 유저간의 나이차와 키의 합 출력하기(변수에 할당하고 키값 참조)
var user02 = {
  age: 40,
  height: 190,
  name: "정철",
};

var user03 = {
  age: 33,
  height: 179,
  name: "민수",
};

console.log("두 사람의 나이차는 : ", user02.age - user03.age);
console.log("두 사람의 키의 합은 : ", user02.height + user03.height);

console.log(b);
