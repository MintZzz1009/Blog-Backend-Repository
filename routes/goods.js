const app = require("express");
const router = express.Router();

// GET localhost:3000/api/
router.get('/', (req, res) => {
  res.send("default url for goods.js GET Method")
})

// GET localhost:3000/api/about
router.get('/about', (req, res) => {
  res.send("goods.js about PATH")
})

module.exports = router;