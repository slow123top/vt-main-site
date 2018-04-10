var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var summary = require('./routes/summary');
var detail = require('./routes/detail');
var deleteFile = require('./routes/delete');
var upload = require('./routes/upload');
var login = require('./routes/user/login');
var register = require('./routes/user/register');
var checkToken = require('./routes/user/check');
var sitesStatus = require('./routes/site/sitestatus');
var startSite = require('./routes/site/startsite');
var scs = require('./routes/search/scs');
var validateUsername = require('./routes/user/validateusername')
var imageUpload = require('./routes/user/imageupload')
var getUserInfo = require('./routes/user/get_user_info')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header('Authorization', '*');
    next();
});
app.use('/', index);
app.use('/summary', summary);
app.use('/detail', detail);
app.use('/login', login)
app.use('/register', register)
app.use('/validateUsername', validateUsername)
app.use('/check', checkToken)
app.use('/sitesStatus', sitesStatus)
app.use('/startSite', startSite)
app.use('/delete', deleteFile)
app.use('/upload', upload)
app.use('/scs', scs)
app.use('/imageUpload', imageUpload)
app.use('/getUserInfo', getUserInfo)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//跨域

// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//
// });
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
