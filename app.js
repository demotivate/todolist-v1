const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy food", "cook food", "eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    var day = date.toLocaleDateString("en-US", options);

    res.render("list", { day: day, newListItems: items });
});

app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen("3000", function () {
    console.log("listening on port 3000");
});
