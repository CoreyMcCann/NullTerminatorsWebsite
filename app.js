const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/deliverables", (req, res) => {
    res.render("index");
})

app.get("/team", (req, res) => {
    res.render("team")
})

app.listen(3000, () => {
    console.log("serving on port 3000");
})