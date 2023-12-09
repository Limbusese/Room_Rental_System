const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8020;

require("./database/conn");
const { User } = require("./models/user");
const propertyRouter = require("./routes/property");


server.use(express.json());
server.use(bodyParser.json());
server.use("/",propertyRouter.router);
server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


server.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const confirmedpassword = req.body.confirmpassword;

    if (password === confirmedpassword) {
      const registerUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        password: password,
        confirmpassword: req.body.confirmpassword,
      });

      const registered = await registerUser.save();
      console.log(registered);
      res.send("Registered ");
    } else {
      res.status(400).send("password doesn't match");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});


server.listen(port, () => {
  console.log(`The server is running at port  no ${port}`);
});
