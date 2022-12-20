const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const { request } = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let items = [];
let workItem = [];

app.get("/", function (req, res) {

    let day = date.getDate(); // exports of date.js are bound in date (line 3).
    // let day = date().getDay; // give the specific function date.js module.

    res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItem.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (reqq, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItem, });
});

app.listen(process.env.PORT || 3000,
    function () {
        console.log("Server is running at Port 3000.");
    });