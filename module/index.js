// import : 가져오기. 사용하려면 type="module"로 지정해야한다.
// as를 사용하면 식별자 이름을 바꿀 수 있다.
import { sum as mathSum, PI } from "./lib/math.js";
import math from "./lib/math.js";

console.log(mathSum(2, 3), PI);
math();

// PI = 3.141592; import한 값은 변경할 수 없다.
