var express = require('express');
var router = express.Router();

router.get('/:filename',function(req,res,next){
  if (req.session.uid) {
    res.download('./uploads/'+req.params.filename);
  }
  else {
    res.redirect('/');
  }
})

module.exports = router;
