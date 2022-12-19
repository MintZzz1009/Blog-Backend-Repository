
const connect = require("./schemas");
connect();

const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts.js')
const commentsRouter = require('./routes/comments.js')

app.use(express.json());

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
})


  app.get("/:id", (req,res) => {
    console.log(req.params);
    const { receiveParams } = req.params
  
    res.send(`${req.params['id']} URI에 정상적으로 반환되었습니다.`)
  })


  app.use(express.json());
  app.use("/api", [postsRouter, commentsRouter])


  app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });
  
