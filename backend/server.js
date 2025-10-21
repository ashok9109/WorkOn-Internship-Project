require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
const cacheClient = require("./src/services/cache.services");

connectDB()

cacheClient.on("connect", ()=>{
    console.log("Redis is connected successfully")
});

cacheClient.on("error", (error)=>{
    console.log("error in redis", error)
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})