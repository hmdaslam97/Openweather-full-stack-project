let {app,dotenv,axios,express}=require('./requiredFiles')
const router = express.Router()
dotenv.config()

const lat = 28.7041,lon = 77.1025;
const url1 = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&lat=${lat}&lon=${lon}&units=metric`

router.use("/weather",(req,resp)=>{
    axios
      .get(url1)
      .then(function (response) {
        // console.log(response.data);
        resp.send(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    })
module.exports = router;
  

    
    