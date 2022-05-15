const express = require("express");
const path = require("path");
require("./db/conn");
// const User = require("./models/usermessage");
const hbs = require("hbs");
const { registerPartials } = require("hbs");


const app = express();
const port = process.env.PORT || 3100;

// setting the path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath))

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

// routing
// app.get(path,callback)
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/blog", (req, res) => {
    res.render("blog");
})
app.get("/videos", (req, res) => {
    res.render("videos");
})
app.get("/reviews", (req, res) => {
    res.render("reviews");
})
app.get("/collections", (req, res) => {
    res.render("collections");
})
app.get("/records", (req, res) => {
    res.render("records");
})


// creating server
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})