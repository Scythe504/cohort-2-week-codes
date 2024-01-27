const express = require("express");
const app = express();
app.use(express.json());
const zod = require('zod');
//ZOD
/*
const schema = zod.array(zod.number());
function validation(obj){

    const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidney: zod.array(zod.number())
    });
    const response = schema.safeParse(obj);
}

app.post("/health-checkup",(req,res)=>{
    const response = validation(req.body)
    if(!response.success){
        res.json({
            msg : "Your inputs are invalid"
        })
        return ;
    }
    else {
        res.json({
            msg: "Login Success!"
        })
    }
});

app.listen(3000);
*/

async function getUserData(){
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const finalData = await response.json();
    document.getElementById("userData").innerHTML = JSON.stringify(finalData);
}
/*
<div id="container">
<button onclick="getAnimals()">get animals</button>
</div>
*/
function getAnimals() {
  fetch("https://fakerapi.it/api/v1/persons")
    .then(async function(response) {
      const jsonData = await response.json();
      document.getElementById("container").innerHTML = JSON.stringify(jsonData.data);
    })
}

