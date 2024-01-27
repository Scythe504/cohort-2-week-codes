//https
const zod = require("zod");
const express = require("express");
const bodyParser = require('body-parser');
//CLI command line interface
//https
//const port = 3000;
function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans+i;
  }
  return ans;
}
/*
app.get('/health-checkup',(req,res)=>{
  const username = req.headers.username;
  const pass = req.headers.pass;
  const kidneyId = req.query.kidneyId;
  if(!(username ==="Scythe"||pass === "passs")){
    res.status(400).json({"msg":"Smthng up with your inputs"});
    return;
  }
  if(!(kidneyId === 1 || kidneyId === 2)){
    res.status(400).json({"msg":"Smthng up with your inputs"});
    return;
  }
  res.json({
    "msg":"Your kidney is fine"
  })
});

app.listen(3000);
*/

const app = express();
app.use(express.json());

let users = [
  {
    name: "John",
    kidneys: [{ healthy: true }],
  },
  /*{
    name: "Keats",
    kidneys: [{ healthy: true }],
  },*/
];

app.get('/',(req,res)=>{
  let totalKidneys = users[0].kidneys.length;
  let healthyKidneys = 0;
  for(let i = 0;i<totalKidneys;i++){
    if(users[0].kidneys[i].healthy) healthyKidneys++;
  }
  let unhealthyKidneys = totalKidneys - healthyKidneys;
  res.json({
    totalKidneys,
    healthyKidneys, 
    unhealthyKidneys
  })
})
app.post("/",(req,res)=>{
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  })
  res.json({
    msg: "Done!"
  })
})
app.put("/",(req,res)=>{
  
  for(let i = 0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy === true){
      users[0].kidneys[i].healthy = false;
    }
  }
  res.json({msg:"Done"})
})
app.delete("/",(req,res)=>{
  let atLeastOneHealthyKidneys = false;
  let newKidneys = [];
  for(let i = 0;i<users[0].kidneys.length;i++){
    if(!users[0].kidneys[i].healthy){
      atLeastOneHealthyKidneys = true;
    }
  }
  
  if(atLeastOneHealthyKidneys){

    for(let i= 0;i<users[0].kidneys.length;i++){
      if(users[0].kidneys[i].healthy){
        newKidneys.push(
          {
            healthy: true
          }
          )
        }
      }
      users[0].kidneys = newKidneys;
      res.json({
        msg: "Successfully Extracted the defect kidneys"
      })
    }
    else{
      res.status(401).json({
        msg: "You Have No Unhealthy Kidneys"
      })
    }
})
app.listen(3000);
console.log("Server is listening on port 3000");