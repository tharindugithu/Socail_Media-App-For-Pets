const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")//Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

require("dotenv").config({path:"backend/config/config.env"})

//using middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))//function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(cookieParser())
//importing routes
const post = require("./routes/post.js")
const user = require("./routes/user.js")
//using routes
app.use("/api/v1",post)
app.use("/api/v1",user)

module.exports =app