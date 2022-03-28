const app = require("./index");

const connect = require("./configs/db")

app.listen(5000,async()=>{

try {
    await connect();
  } 
  catch (error) {
    console.log(error)
}
console.log("listehing on port 5000")

})