/* 
    객체(object)
        - 여러 속성값(property)을 가진 데이터.
        - 키값은 기본적으로 식별자 규칙과 동일.
            => ""안에 작성하면 무시하고 작성 가능.
        - JS의 거의 모든 것이 객체다.

    메서드(method)
        - 객체의 프로퍼티가 함수면 메서드
    
    this
        - 메서드를 호출한 객체.
        - this를 통해서 호출한 객체의 프로퍼티를 참조할 수 있다.
        - 다양한 프로퍼티와 메서드를 통해서 객체의 고유한 동작을 만든다.
*/
let user = {
  name: {
    lastName: "Hwangbo",
    firstName: "seok",
  },
  age: 31,
  weight: 67,
  "last-name": "hwangbo",
};

console.log(user["last-name"]);

// 객체 프로퍼티 참조 : 객체 프로퍼티 값을 읽는다. 객체.프로퍼티의 형식으로.
console.log(user.name);
// 객체의 프로퍼티 값 변경
user.age = 32;
// 객체의 새로운 프로퍼티 할당 : 객체에 없는 프로퍼티에 값을 할당하면 새로운 프로퍼티가 생긴다.
user.height = 173;
console.log(user.height);
console.log(user["age"]);

let arr = ["orange", "apple", "grape", "banana"];
console.log(arr[arr.length - 1]); // arr의 length 프로퍼티 참조.

console.log(user.name.firstName);
// console.log(user.color.bg); undefined, null한테 프로퍼티를 참조하면 오류 발생!
console.log(user.color?.bg); // 옵셔널 체이닝. undefined거나 null 참조 x.

let dog = {
  name: "coco",
  age: 11,
  bow: function (sound) {
    console.log(sound);
  },
};

dog.bow("멍!멍!");

let user02 = {
  name: "seok",
  age: 31,
  hello: function () {
    console.log("안녕하세요 저는 %d세 %s입니다.", this.age, this.name);
  },
};

let user03 = {
  name: "minsu",
  age: 29,
  hello: function () {
    console.log("안녕하세요 저는 %d세 %s입니다.", this.age, this.name);
  },
};
user02.hello();
user03.hello();

// rect라는 사각형 객체 만들기. width(너비) 프로퍼티, height(높이) 프로퍼티, 넓이 구하는 메서드 만들기.
let rect = {
  width: 100,
  height: 100,
  getArea: function () {
    return this.width * this.height;
  },
};

console.log(rect.getArea());
