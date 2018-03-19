var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var session = require('express-session');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/searchEngine';
var multer = require('multer');
var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var uploads = require('./routes/upload');
var search = require('./routes/search');
var download = require('./routes/download');
var admin = require('./routes/admin');
var deleteFile = require('./routes/delete');
var update = require('./routes/update');
var app = express();
mongoose.connect(mongoDB);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/login', login);
app.post('/logout', function(req,res,next){
  delete req.session.uid;
  res.redirect('/');
});
app.use('/register',register);
app.use('/upload',uploads);
app.use('/search',search);
app.use('/uploads',download);
app.use('/admin',admin);
app.use('/delete',deleteFile);
app.use('/update',update);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
