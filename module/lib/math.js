// export : 내보내기. type="module"로 지정해야한다.
export let PI = 3.14;

export function sum(a, b) {
  return a + b;
}

// 기본으로 내보지는 값. import할 때 {}를 사용하지않는다.
export default function () {
  console.log("export default!");
}
