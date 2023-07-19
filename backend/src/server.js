const express = require('express');
const path = require('path');
const server = express();
const port = process.env.PORT || 8080;
require('./database/conn')

const {User} = require('./models/user')

server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.post('/register', async(req, res) => {
  try{

    console.log(req.body.confirmpassword)
      const password = req.body.password;
      const confirmedpassword = req.body.confirmpassword;
    

      if(password === confirmedpassword){

        const registerUser = new User({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            password: password,
            confirmpassword: req.body.confirmpassword
        });
    
        const registered = await registerUser.save();
        console.log(registered)
        res.send("Registered ")
      }
      else{
        res.status(400).send("password doesn't match");
      }
  }
  catch(error){
    res.status(400).send(error)
  }
});


server.listen(port, ()=> {
    console.log(`The server is running at port  no ${port}`);
});
