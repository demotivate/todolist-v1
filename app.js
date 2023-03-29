const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
    var day = new Date();

    if (day.getDay() === 0 || day.getDay() === 6) {
        res.send("hooray");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen("3000", function () {
    console.log("listening on port 3000");
});
