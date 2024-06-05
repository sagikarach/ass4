const express = require("express");
const app = express();
app.use(express.static("public")); // use the file in public folder
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", function (req, res) {
  var user = req.body.username; //request the x number from the index.js file
  var pass = req.body.password; //request the y number from the index.js file

  if ((user == 'guest') & (pass == '1234'))
    res.end('welcome guest')
  else
    res.end('invalid username and/or password')
});

app.listen(808); // the port that we using
