const express = require('express')
const { route } = require('../../foodOrdering/routes/admin-route')
const router = express.Router()
const controller = require("../controller/index")

router.get(
  "/",
  controller.welcome
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