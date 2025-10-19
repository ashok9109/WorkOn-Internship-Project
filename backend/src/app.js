const express = require("express");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors")


const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(cookieParser())


// user api
app.use("/api/user", userRouter);

module.exports = app;