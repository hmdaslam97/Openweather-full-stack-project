let express = require("express")
let app = express()
app.listen(3000)
const dotenv = require("dotenv")
dotenv.config()
let axios=require('axios')

module.exports = {app,axios,dotenv,express}
