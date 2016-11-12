var express = require('express');
var router = express.Router();
var User = require("../models/User");

/* GET users listing. */
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.json("User Unauthenticated");
  }
}

router.route("/add").post(function(req, res, next) {
  var Obj = req.body;/*object has two fields Username And Password*/
  Obj["category"]=["Others"];/*adding a default category Others*/
  Obj = new User(Obj);/*filter the content according to Schema*/
  User.findOne({username:Obj.username},function(err,data){
    if(err)
    res.send("Some Error Occured!");/*database error*/
    else {
      if(data){
        res.send("Sorry! Another User has already taken this Username. Please continue taking diffrent Username");/*response for user*/
      }
      else{
        Obj.save(function(error){
          if(error){
            res.send(error);/*error in saving to database*/
          }
          else{
            console.log("New User Added to database");
            res.send("Sign Up Successfull. Please Login to Continue");/*sign up success resposne*/
          }
        });
      }
    }
  });
});

module.exports = router;
