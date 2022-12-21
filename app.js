
const connect = require("./schemas");
connect();

const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts.js')
const commentsRouter = require('./routes/comments.js')

// app.post("/", (req, res) => {
//   console.log(req.body)
//   res.send(`기본 URI에 POST 메서드가 정상적으로 실행되었습니다. ${req.body["key1234"]}`)
// })

app.get("/", (req, res) => {
  console.log('url 종류');
  console.log('/api/posts');
  console.log('/api/comments');
  res.status(200).send("Haksoo Ji 개인 블로그 백엔드 테스트\n콘솔을 확인하세요.")
})

app.use(express.json());
app.use("/api", [postsRouter, commentsRouter])

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
  
