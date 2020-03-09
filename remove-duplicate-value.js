
// 배열에서 중복된 값을 제거하고 싶을 때 쉬운 방법

// javascript의 set을 이용하면 쉽게 유니크한 배열을 만들 수 있습니다.
// set의 정의를 보면 "자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있음" 이라고 나옵니다.
// 중복된 값을 set을 이용해서 제거한 후 새로운 배열을 만들어내면 됩니다.

const array = [1, 5, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

const array2 = ['apple', 'banana', '', 'apple', '', 'pineapple'];
const uniqueArray2 = [...new Set(array2)];
console.log(uniqueArray2);