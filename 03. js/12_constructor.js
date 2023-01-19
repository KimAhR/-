/* 
    생성자(constructor)
        - 객체에 대한 형태를 미리 만들어놓고 찍어서 생산할 수 있는 틀과 같은 개념.
        - 제품을 생산하기 위한 설계도와 같은 역할.
        - 생성자 함수는 대문자로 시작한다(파스칼 케이스).

    인스턴스(instance)
        - 실제로 메모리에 할당되는 생성자의 의해 생성된 객체.
        - 생성자 함수를 new 키워드와 함께 실행하면 인스턴스가 생성된다.
            => 실제로 만들어진 제품 => 제품마다 색상, 용량 등이 달라진다.
*/

// 객체 리터럴 방식의 생성 : {}라는 기호를 통해서 간단하게 객체 생성.
//      => 객체를 만들기 쉽다.
//      => 단점은 같은 형태의 객체를 여러개 만들려면 번거롭다.
let user = {
  name: "황보석",
  age: 30,
  hello: function () {
    // user의 이름과 나이를 포함하여 인사말 출력하기.
    // ex) 안녕하세요 저는 31세 황보석입니다.

    // 템플릿 리터럴 : `` 안에서 ${}를 사용하면 JS 표현식을 사용할 수 있다.
    console.log(`안녕하세요 ${this.age}세 ${this.name}입니다.`);
  },
};

let user02 = {
  name: "김정철",
  age: 31,
  hello: function () {
    console.log(`안녕하세요 ${this.age}세 ${this.name}입니다.`);
  },
};

user.hello();
user02.hello();

// 생성자 함수를 통한 객체 생성.
let obj = new Object();
console.log(obj);

/* 
    함수 내부에서 this를 통해서 값을 할당하면 생성자 함수가 된다.
        => this는 생성자 함수를 통해 생성될 인스턴스를 가리킨다.
        => return 값이 없어도 자동으로 인스턴스를 return한다.
*/

function User(name, age) {
  this.name = name;
  this.age = age;

  //   this.hello = function () {
  //     console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  //   };
}

// prototype : 인스턴스가 사용할 프로퍼티, 메서드를 상속시켜줄 수 있다.
User.prototype.send = function (message) {
  console.log(message);
};
User.prototype.hello = function () {
  console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
};
// 정적 메서드 : 생성자 함수를 통해서 호출할 수 있는 메서드
//      => 공통적으로 제공하는 기능을 만들 때 주로 사용.
User.isUser = function (user) {
  // user가 생성자 User로 만들어진 인스턴스가 맞는지 확인.
  console.log(user instanceof User);
};

const user03 = new User("seok", 31);
let user04 = new User("김정철", 32);

user03.hello();
user04.hello();

user03.send("send 메세지 실행!");
User.isUser(obj);

console.log(user03);
console.log(user04);

/* 
    클래스(class)
        - 생성자 함수와 동일한 역할을 수행한다.
        - 다른 프로그래밍 언어의 클래스 개념을 도입했다.
            => 전혀 새로운 개념이 아니라 클래스를 사용해도 JS에서는 내부적으로 프로토타입을 기반으로 동작한다.
            => 문법적 설탕(Syntax Sugar)이라고 부른다.
        - class 키워드와 함께 사용한다.
            => ()가 붙지 않는다.
        - constructor를 통해 값을 초기화할 수 있다.
            => 초기화할 값이 없다면 constructor 생략 가능하다.
            => 생략을 할 경우, JS가 내부적으로 자동으로 constructor를 실행한다. => 빈 객체를 만들어낸다.
        - 프로토타입 메서드는 함축표현으로 함수를 만들면 된다.
*/
class Car {
  constructor(color, speed) {
    this.color = color;
    this.spped = speed;
  }

  // 프로토타입 메서드 생성 => 함축표현 사용.
  stop() {
    console.log("자동차가 멈췄습니다.");
  }

  static isCar(obj) {
    return obj instanceof Car;
  }
}

let car = new Car("red", 200);
console.log(car);
car.stop();

if (Car.isCar(car)) {
  console.log("자동차가 맞습니다.");
}

// Animal 클래스 만들기
// species(종): ex) 포유류, 단공류, 양서류,
// cry 메서드 만들기 => 울음소리 전달받아서 콘솔창에 출력.
class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }
  cry(sound) {
    console.log(sound);
  }
}

class Cat extends Animal {
  constructor(color) {
    super("고양이", 4); // 상위 클래의 constructor를 호출한다.
    this.color = color;
  }

  // Animal 클래스의 cry 메서드 덮어쓰기(오버라이드)
  cry() {
    super.cry("야옹~"); // 상위 클래스의 메서드를 호출.
  }

  // Animal 클래스를 상속 받아서 메서드를 추가.
  jump() {
    console.log("폴짝!");
  }
}

let cat = new Cat("white");
console.log(cat);
cat.cry();
cat.jump();
