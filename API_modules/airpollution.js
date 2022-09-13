let { app, dotenv, axios, express } = require("./requiredFiles")
const router = express.Router()
dotenv.config()

const lat = 28.7041,
  lon = 77.1025
const url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`


router.use("/airpollution", (req, resp) => {
  axios
    .get(url2)
    .then(function (response) {
      // console.log(response.data)
      resp.send(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})
module.exports = router
