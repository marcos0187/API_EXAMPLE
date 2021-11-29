const bodyParser = require("body-parser");
const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();

router.use(bodyParser.json());

router.get("/raspberry", function(request, response){
    console.log(request)
    response.json("Led On");
    console.log(chalk.red("Led on"));

});

router.get("/home", function(request, response){
    console.log(request)
    response.json("welcome to home");
    console.log(chalk.gray("welcome home"));

});

router.post("/raspberry", (req, res)=>{
    res.send(req.body);

    const {LedIntensity} = req.body;
    console.log(LedIntensity);

    console.log(req.body);
    
   
})

module.exports = router;
