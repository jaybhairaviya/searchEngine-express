var User = require('../models/users');
var exports = module.exports = {};
exports.create = (req, res, cb)=> {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function (err) {
    cb(err);
  });
};
//TODO: NOT USing right now
exports.listAll = (req, res, next) => {
  User.find({}, function (err, users) {
      if (err)
        return next(err);
      res.json(users)
  });
};

exports.getById = (id,cb) => {
  User.findById(id, function (err, user) {
    cb(user);
  });
};

exports.authenticate = (req,res,cb) => {
  User.findOne({username: req.body.username,password:req.body.password},function(err,user){
    cb(user);
  })
}
