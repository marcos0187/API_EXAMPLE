const bodyParser = require("body-parser");
const chalk = require("chalk");
const { response } = require("express");
const express = require ("express");
const { request } = require("http");
const { append } = require("vary");
const myRouters = require("./routes/raspberry");

const PORT = 3000;
const URL = "http://localhost";
const app = express();

app.use(myRouters);


app.get("/", (request, response)=>{
    response.json("hello world")
})

app.listen (PORT, () => {

    console.log(chalk.green(`server running at: ${URL}:${PORT}/`));

})