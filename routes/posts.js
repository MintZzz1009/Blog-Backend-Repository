const express = require("express");
const router = express.Router();

// 게시글 생성 및 DB 등록 API
const Posts = require("../schemas/post.js")
router.post("/posts", async (req, res) => {
	const { postsId, title, author, password, dateCreated, content } = req.body;  
  const [ dbData ] = await Posts.find({ postsId });  
  if (dbData) {
    return res
      .status(202)
      .json({ 
        success: false, 
        errorMessage: "이미 존재하는 데이터입니다." 
      });
  }

  const createdPosts = await Posts.create({ postsId, title, author, password, dateCreated, content });
  res.status(201).json({ createdPosts });
});


// 전체 게시글 목록 조회 API
router.get("/posts", async (req, res) => {
  const dbData = await Posts.find({ }).sort({dateCreated: -1});
  // 내림차순 정렬
  
  if (!dbData.length) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "게시된 글이 없습니다."
    });
  } 
  
  let result = []
  for (const Post of dbData) {
    const postsId = Post['postsId']
    const title = Post['title']
    const author = Post['author']
    const dateCreated = Post['dateCreated']
    result.push({postsId, title, author, dateCreated})
  }

  res.status(200).json( result )
})


// 게시글 상세 조회 API
router.get("/posts/:postsId", async (req, res) => {
  const { postsId } = req.params
  const [ dbData ] = await Posts.find({ postsId });

  if (!dbData) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "존재하지 않는 게시글 입니다."
      });
  } 

  res.status(200).json({ dbData })
})


// 게시글 수정 API    *비밀번호 비교
router.patch("/posts/:postsId", async (req, res) => {
  
  const { postsId }  = req.params  
  const { password, content } = req.body // 변수명이 속성명과 같아야 받아진다.
  const [ dbData ]  = await Posts.find({ postsId });

  if (!dbData) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "존재하지 않는 게시글 입니다."
      });
  } 

  if (dbData.password === password) {
    await Posts.updateOne({ postsId }, { $set: { content } })
    return res.json({ success: true });
  } else {
    return res.status(403).json({ 
          success: false,
          errorMessage: "잘못된 비밀번호 입니다."
          });
  }
})


// 게시글 삭제 API    *비밀번호 비교
router.delete("/posts/:postsId", async (req, res) => {
  const { postsId } = req.params;
  const { password } = req.body;
  const [ dbData ] = await Posts.find({ postsId });

  if (!dbData) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "존재하지 않는 게시글 입니다."
      });
  } 

  if (dbData.password === password) {
    await Posts.deleteOne({ postsId });
    return res.status(200).json({ result: "success" });
  } else {
    return res.status(403).json({ 
      success: false,
      errorMessage: "잘못된 비밀번호 입니다."
      });
  }
});

module.exports = router;

