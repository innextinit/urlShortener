const env = require('dotenv')
 env.config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { PORT } = process.env

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/", require("./router/Index"))

app.listen(PORT, async () => {
  await require("./config/db-config")()
  console.log(`Process PID [${process.pid}] ::> Server listening on port ${ PORT } @ http://localhost:${ PORT }`)
})

module.exports = app