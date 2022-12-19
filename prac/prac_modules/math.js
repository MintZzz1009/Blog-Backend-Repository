
// 함수 그 자체를 내보내려고 할 때
// run.js에서 사용할 때 add.add
function add1(a, b) {
  return a + b;
}
// 함수 하나를 내보내 주는 방식
module.exports = add1;


// 함수 그 자체가 아니라 익명함수를 통해 객체를 내보낼 때
exports.add2 = function (a, b) {
  return  2(a + b)
}


// add라는 객체를 만들어서 add의 키값으로 뒤에 value를 함수로 넣어서 만든 것.
function add3(a, b) {
  return 3(a + b);
}
module.exports = { add3: add3 };


// add라는 변수에다가 함수를 할당해서 사용하는 방법
const add4 = (a, b) => { 
  return a + b;
}
exports.add4 = add4
