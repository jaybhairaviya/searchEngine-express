var express = require('express');
var router = express.Router();
var FileModel = require('../models/files');

router.use('/',function(req,res,next){
  if(req.session.uid && req.session.u_role){
    next();
  }
  else{
    res.redirect('/');
  }
})

router.get("/:fid",function(req,res){
  FileModel.findById(req.params.fid,function(err,data){
    res.render('admin',{isUpdate : true,fid : req.params.fid,data : data});
  })
});

router.post('/:fid',function(req,res){
  let tags = req.body.tags;
  tags = tags.split(',');
  FileModel.update({_id : req.params.fid},{$set : {tags:tags}},function(err,data){
    res.redirect('/admin');
  })
});

module.exports = router;
