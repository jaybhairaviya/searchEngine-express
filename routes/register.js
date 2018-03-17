var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.get('/',function(req,res,next){
  res.redirect('/');
})
router.post('/',function(req,res,next){
  controller.create(req,res,function(err){
    if(err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;
