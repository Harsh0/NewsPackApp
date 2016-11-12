var express = require('express');
var router = express.Router();
var News = require("../models/News");
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

function addNews(obj){
  var ret;

}
/*add news to the database */
router.route("/add").post(isLoggedIn,function(req, res, next) {
  var Obj = req.body;/*body will contain news object from newsapi added on more field category*/
  User.findOne({username:req.user.username},{},function(err,data){
    Obj["UserId"]=new ObjectId(ata["_id"]);/*adding userid for news schema*/
    console.log(data["_id"]);
    if(!Obj.category){
      Obj.category = "Others";
    }
    if(!Obj.comment){
      Obj.comment = "";
    }
    User.findOne({username:req.user.username,category:{$in:[Obj.category]}},function(err,data){
      if(err){
        res.send("Some Error Occured!");/*database error*/
      }
      else{
        if(data){
          /*category already exist*/
          News.findOne({url:Obj.url},function(err,data){
            if(err){
              res.send(err);
            }
            else if(data){
              res.send("News already exist");
            }
            else{
              Obj = new News(Obj);
              Obj.save(function(err){
                if(err){
                  res.send(err);
                }
                else{
                  res.send("News Added Successfully");
                }
              });
            }
          });
        }
        else{
          User.update({username:req.user.username},{$push:{category:Obj.category}},function(error,dataU){
            if(error){
              res.send(error);
            }
            else{
              /*category added successfully*/
              News.findOne({url:Obj.url},function(err,data){
                if(err){
                  res.send(err);
                }
                else if(data){
                  res.send("News already exist");
                }
                else{
                  Obj = new News(Obj);
                  Obj.save(function(err){
                    if(err){
                      res.send(err);
                    }
                    else{
                      res.send("News Added Successfully");
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  });
});
/*fetch category name for a perticular user from database*/
router.route("/categories").get(isLoggedIn,function(req,res,next){

});

/*fetch news from database according to category and keyword*/
/*object from body will be passed that contain category and keyword both eare optional*/
router.route("/get").post(isLoggedIn,function(req,res,next){

});

module.exports = router;
