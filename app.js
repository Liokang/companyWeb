const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const ejs = require("ejs");
const ejsMate = require("ejs-mate");


// View engine setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => {
  
  res.send("hello");
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
