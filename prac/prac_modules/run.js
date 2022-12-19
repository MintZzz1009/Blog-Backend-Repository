const add1 = require("./math.js")
console.log(add1(10,30))


// 객체 구조 할당을 통해 좀 더 간단화 하는 방법
// 함수가 아니라 객체를 내보냈으므로 객체 구조 할당을 통해 받아서
// 객체(exports.add2) 안의 함수를 사용한다.
// exports = { add2: function (a, b) { return 2(a + b) }}
const { add2 } = require("./math.js")
console.log(add2(10,30))


const add3 = require("./math.js")
console.log(add3(10,30))


const { add4 } = require("./math.js")
console.log(add4(10,30))
