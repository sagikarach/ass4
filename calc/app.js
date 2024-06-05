const express = require("express");
const app = express();
app.use(express.static("public")); // use the file in public folder
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
function calc(x, y, operation) { //calculate the number according to the operation
  switch (operation) {
    case "0":
      return x + y;
    case "1":
      return x - y;
    case "2":
      return x * y;
    case "3":
      return x / y;
    default:
      return "incalculable";
  }
}

app.post("/calc", function (req, res) {
  var x = parseInt(req.body.x); //request the x number from the index.js file
  var y = parseInt(req.body.y); //request the y number from the index.js file
  var operation = req.body.operation; //request the operation from the index.js file
  var result = calc(x, y, operation); //send the numbers and the operation
  //the response format:
  res.end(`<html> 
            <body>
                The answer is ${result}.
                <a href="/index.html">reset</a>
            </body>
        </html>`);
});

app.listen(808); // the port that we using 
