const express = require('express'); //Line 1
const bodyParser = require("body-parser");
const request = require("request");
const cors = require('cors');
const app = express();


app.use(cors({ origin: 'http://localhost:3001' }))
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/', function (req, res) { //Line 9
  //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  //res.sendFile(__dirname + "/my-app/src/components/pages/SignUp.js");
  // res.sendFile(__dirname + "/SignUp.js");
  //   console.log(___dirname);
  res.send("Hello World !");

});

app.post("/register", function (req, res) {

  // var firstname = .Firstname;

  // var lastname = req.body.lname;
  // var email = req.body.email;
  console.log(req.body);
  res.send(req.body);

});