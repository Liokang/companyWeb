const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const bodyParser = require("body-parser");

// View engine setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  
  res.render("index");
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
