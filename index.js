let weather = require("./API_modules/weather")
let airpollution = require("./API_modules/airpollution")
let nearby = require("./API_modules/nearby")
let { app } = require("./API_modules/requiredFiles.js") //multiple objects can be imported

app.use(weather)
app.use(airpollution)
app.use(nearby)

app.use("/", (req, res, next) => {
  res.status(404).send("<h1>Result Not Found! Please append in URL</h1>")
})
