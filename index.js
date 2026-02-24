const express = require('express')
const app = express()

app.get('/',(req,res)=>{
return res.json({message: 'hey im node server from container !'})
});

setTimeout(() => {
  throw new Error("Crash test");
}, 10000);

app.listen(3000,()=>console.log("server running on PORT:3000"))
