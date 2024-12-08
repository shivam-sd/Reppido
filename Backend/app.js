const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./db/db");
const userRouter = require("./routes/user.router");
const captionRouter = require("./routes/caption.router");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/",(req,res) => {
    res.send("Hello World");
})

app.use("/users",userRouter);
app.use("/captions",captionRouter);

module.exports = app;
