const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js')


app.get('/', (req, res) => {
  res.send('Hello World!');
});


// API 등록하는 문법 app.use
// 미들웨어, app.get()과의 순서에 주의
// localhost:3000
app.use("/api", goodsRouter)



app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});