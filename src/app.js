const express = require("express");
const app = express();
require("../src/db/conn");
const MensRanking = require("../src/models/mains");
const router = require("../src/routers/men");
app.use(express.json());
const port = process.env.port || 3000
app.use(router);

app.get("/", async (req,res)=>
{
    res.send("this is our home page ");
})

app.listen(port,()=>{
    console.log(`this is the live port number ${port}`);

})