const connect = require("./schemas");
connect();

const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js')


app.use(express.json());
// express.json() -> 바디파서 미들웨어 
// req.body 를 사용하려면 이거를 작성해야 한다.

app.post("/", (req, res) => {
  console.log(req.body)

  res.send(`기본 URI에 POST 메서드가 정상적으로 실행되었습니다. ${req.body["key1234"]}`)

})


app.get("/", (req, res) => {
  console.log(req.query);

  const obj = {
    "KeyKey" : "value 입니다.",
    "이름입니다.":"이름일까요?"
  }
  res.status(400).json(obj)
  // 변수말고 직접 객체를 넣어도 된다.
  // res.json({
  //   "KeyKey" : "value 입니다.",
  //   "이름입니다.":"이름일까요?"
  // })
  
  // res.send('정상적으로 반환되었습니다.')
})

app.get("/:id", (req,res) => {
  console.log(req.params);

  res.send(":id URI에 정상적으로 반환되었습니다.")
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use(express.json());
// body로 전달 받은 JSON 데이터를 바로 사용할 수 없어요!
// middleware가 app.use("/api", [goodsRouter]) 보다 위에 작성되어야 합니다.


// API 등록하는 문법 app.use
// 전역 미들웨어, app.get()과의 순서에 주의
// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter])



app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

