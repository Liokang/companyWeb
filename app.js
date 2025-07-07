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
  const projects = [
    {
      title: "Campground App",
      description: "Created a database-backed web app with reviews, maps using Mapbox API, and Passport.js authentication.",
      link: "https://github.com/Liokang/HelpYelp"
    },
    {
      title: "Street Vendor Booking App",
      description: "Built vendor & customer booking system, integrated Mapbox, and dashboard functionalities.",
      link: "https://github.com/Liokang/streetVendor2"
    },
    {
      title: "Movie Recommendation",
      description: "Python & Node.js app recommending movies using similarity scores. Integrated PythonShell with Node.",
      link: "https://github.com/Liokang/movieRecommendation"
    }
  ];
  res.render("index", { projects });
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
