
// 자료형 변환

// string -> int
const si = "1";
console.log("string to int ex 1 : " + typeof si);

const si2 = "1" * 1;
console.log("string to int ex 2 : " + typeof si2);

let si3 = "1";
si3 = +si3;
console.log("string to int ex 3 : " + typeof si3);

const si4 = ~~"1";                                  // ~value =  - value - 1
console.log("string to int ex 4 : " + typeof si4);  // ~~value = - (- value - 1) - 1 = value + 1 - 1 = value

// int -> string
const is = 1;
console.log("int to string ex 1 : " + typeof is);

const is2 = 1 + "";
console.log("int to string ex 2 : " + typeof is2);