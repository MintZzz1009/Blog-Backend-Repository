const express = require("express");
const router = express.Router();

// // GET localhost:3000/api/
// router.get('/', (req, res) => {
//   res.send("default url for goods.js GET Method")
// })

// // GET localhost:3000/api/about
// router.get('/about', (req, res) => {
//   res.send("goods.js about PATH")
// })

const goods = [
  {
    goodsId: 4,
    name: "상품 4",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
  },
  {
    goodsId: 3,
    name: "상품 3",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
  },
  {
    goodsId: 2,
    name: "상품 2",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
  },
  {
    goodsId: 1,
    name: "상품 1",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
  },
];


// 상품 목록 조회 API
router.get("/goods", (req, res) => {
  res.status(200).json({"goods": goods})
  //res.status(200).json({goods}) 키이름과 값이름이 같을 경우 값만 써도 자동으로 된다.
})

// 상품 상세 조회 API
router.get("/goods/:goodsId", (req, res) => {
  const { goodsId } = req.params
  // console.log("params", req.params);
  // console.log(goodsId)
  // console.log(typeof goodsId)

  // let result = null;
  // for (const good of goods) {
  //   if (Number(goodsId) === good.goodsId) {
  //     result = good;
  //   }
  // }

  const [detail] = goods.filter((good) => Number(goodsId) === good.goodsId)
  res.status(200).json({ detail })
})

// 상품 생성 및 DB 등록 API
const Goods = require("../schemas/prac_goods.js")
router.post("/goods/", async (req, res) => {
	const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });  
  // async, await - 데이터를 가지고 온 후에 다음 코드가 실행되도록 동기적으로 처리
  if (goods.length) {
    return res
      .status(400)
      .json({ 
        success: false, 
        errorMessage: "이미 있는 데이터입니다." 
      });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });
  console.log(createdGoods)

  res.json({ goods: createdGoods });
});


module.exports = router;