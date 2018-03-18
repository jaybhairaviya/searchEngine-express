var express = require('express');
var router = express.Router();
var FileModel = require('../models/files');
router.get('/',function(req,res,next){
  if(req.session.uid){
    next();
  }
  else
    res.json({error: "User not authenticated"});
});

router.get('/',function(req,res){
  let query = req.query.query;
  if(!query){
    res.json({error : "Invalid query parameter"});
  }
  else{
    var result = FileModel.find({
      $or:[{originalname : {$regex : query}},{tags : query}]
    }).lean().exec(function(err,files){
      res.json(files);
    });
  }
});

module.exports = router;
