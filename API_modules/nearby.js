let { app, dotenv, axios, express } = require("./requiredFiles")
const router = express.Router()
dotenv.config()

const lat = 12.9716,
  lon = 77.5946,
  radius = 0, //meters this value can be 0 or any positive value
  noOfResult = 1,
  nearby = "healthcare" //for more visit : https://apidocs.geoapify.com/docs/places/#categories

const url3 = (function () {
  if (radius) {
    return `https://api.geoapify.com/v2/places?categories=${nearby}&filter=circle:${lon},${lat},${radius}&limit=${noOfResult}&apiKey=${process.env.nearby_api_key}`
  } else {
    return `https://api.geoapify.com/v2/places?categories=${nearby}&bias=proximity:${lon},${lat}&limit=${noOfResult}&apiKey=${process.env.nearby_api_key}`
  }
})()
router.use("/nearby", (req, resp) => {
  axios
    .get(url3)
    .then(function (response) {
      //   console.log(response.data)
      resp.send(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})
module.exports = router
