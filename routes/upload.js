var express = require('express');
var router = express.Router();
var FileModel = require('../models/files');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() +'-'+file.originalname)
  }
})

var upload = multer({ storage: storage });
router.post('/',upload.single('file'),function(req,res,next){
  var tags = req.body.tags;
  tags = tags.split(',');
  req.file.tags = tags;
  var newFile = new FileModel(req.file);
  newFile.save(function(err){
    if(err){
      console.log(err);
    }
  })
  res.cookie("success",true);
  res.redirect('/');
})

module.exports = router;
