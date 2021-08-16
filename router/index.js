const express = require('express')
const router = express.Router()
const controller = require("../controller/index")

router.get(
  "/",
  controller.allData
)

router.post(
  "/",
  controller.URLpost
)

router.get(
  "/:code",
  controller.URLredirect
)

module.exports = router