const express = require("express");
const router = express.Router();

// 댓글 생성 및 DB 등록 API
const Comments = require("../schemas/comment.js")
router.post("/comments", async (req, res) => {
	const { postsId, commentsId, author, password, dateCreated, comment } = req.body;
  const [ dbData ] = await Comments.find({ commentsId });  
  if (dbData) {
    return res
      .status(202)
      .json({ 
        success: false, 
        errorMessage: "이미 존재하는 데이터입니다." 
      });
  }
  if (!comment) {
    return res.status(202).json({ 
      success: false,
      errorMessage: "댓글 내용을 입력해주세요"
      });
  }

  const createdComments = await Comments.create({ postsId, commentsId, author, password, dateCreated, comment });
  res.status(201).json({ createdComments });
});


// 모드 게시글의 등록된 모든 댓글 목록 조회 API
router.get("/comments", async (req, res) => {
  const dbData = await Comments.find({ }).sort({ dateCreated: -1 });  
  // 내림차순 정렬

  if (!dbData.length) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "등록된 댓글이 없습니다."
    });
  } 

  let result = []
  for (const Comment of dbData) {
    const postsId = Comment['postsId']
    const commentsId = Comment['commentsId']
    const author = Comment['author']
    const dateCreated = Comment['dateCreated']
    const comment = Comment['comment']
    result.push({postsId, commentsId, author, dateCreated, comment})
  }
  res.status(200).json({ result })
})


// 조회하는 게시글의 전체 댓글 목록 조회 API
router.get("/comments/:postsId", async (req, res) => {
  const { postsId } = req.params
  const dbData = await Comments.find({ postsId }).sort({ dateCreated: -1 });  
  // 내림차순 정렬

  if (!dbData.length) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "등록된 댓글이 없습니다."
    });
  } 

  let result = []
  for (const Comment of dbData) {
    const postsId = Comment['postsId']
    const commentsId = Comment['commentsId']
    const author = Comment['author']
    const dateCreated = Comment['dateCreated']
    const comment = Comment['comment']
    result.push({postsId, commentsId, author, dateCreated, comment})
  }
  res.status(200).json({ result })
})


// 댓글 수정 API    *비밀번호 비교    *댓글내용 확인
router.patch("/comments/:commentsId", async (req, res) => {
  const { commentsId } = req.params;
  const { password, comment } = req.body; // password, comment
  const [ dbData ] = await Comments.find({ commentsId });

  if (!comment) {
    return res.status(202).json({ 
      success: false,
      errorMessage: "댓글 내용을 입력해주세요"
      });
  }

  if (!dbData) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "존재하지 않는 댓글입니다."
      });
  }
  

  if (dbData.password === password) {
    await Comments.updateOne({ commentsId }, { $set: { comment } });
    return res.status(200).json({ success: true });
  } else {
    return res.status(403).json({ 
      success: false,
      errorMessage: "잘못된 비밀번호 입니다."
      });
  }
})


// 댓글 삭제 API    *비밀번호 비교
router.delete("/comments/:commentsId", async (req, res) => {
  const { commentsId } = req.params;
  const { password } = req.body;
  const [ dbData ] = await Comments.find({ commentsId });
  if (!dbData) {
    return res.status(404).json({ 
      success: false,
      errorMessage: "존재하지 않는 댓글입니다."
      });
  }
    
  if (dbData.password === password) {
    await Comments.deleteOne({ commentsId });
    return res.status(200).json({ result: "success" });
  } else {
    return res.status(403).json({ 
      success: false,
      errorMessage: "잘못된 비밀번호 입니다."
      });
  }
});

module.exports = router;

