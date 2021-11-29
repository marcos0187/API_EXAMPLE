const bodyParser = require("body-parser");
const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();
const raspberryActions = require("../controllers/raspberryActions.js");

const myRaspberry = new raspberryActions(36);

router.use(bodyParser.json());

router.get("/ledOn", function (request, response){
    console.log(request);
    response.json("Led On");
    myRaspberry.ledOn();
    console.log(chalk.yellow("Led turned on"));

	});

router.get("/ledOff", function  (request, response){
	console.log(request);
	response.json("Led Off");
	myRaspberry.ledOff();
	console.log(chalk.yellow("led turned off"));
	});


router.post("/raspberry", (req, res)=>{
    res.send(req.body);

    const {LedIntensity} = req.body;
    console.log(LedIntensity);

    console.log(req.body);
    
   
})

module.exports = router;
