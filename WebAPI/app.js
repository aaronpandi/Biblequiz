var express = require('express');  
var path = require('path');  
var favicon = require('serve-favicon');  
var logger = require('morgan');  
var cookieParser = require('cookie-parser');  
var bodyParser = require('body-parser');  
var cors = require('cors');  
// var routes = require('./routes/index');  
// var users = require('./routes/users');  
// var Tasks = require('./routes/Tasks');  
var app = express();  
var userRoutes = require('./routes/UserRoutes');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
// var img = require('./apiassets');

// view engine setup  
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');  

// uncomment after placing your favicon in /public  
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));  
app.use(express.static(__dirname + '/public/images'));
app.use(cors());  
app.use(logger('dev'));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: false  
}));  
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));  
// app.use('/', routes);  
// app.use('/users', users);  
// app.use('/Tasks', Tasks);  
app.use('/api', userRoutes);
// app.use('/apiassets',apiassets);
// console.log("Insertion is done");
// var hasspass;
// var hasspass2;
// // hasspass  = "Test"
// hasspass= "$2a$10$OdzkNQWjPe5zuvFcQpgm3uG2xxr1JgptYk/9GXJzzAukRs/T2XChe";
// bcrypt.hash("12345", 10, (err, hash) =>
//     {
//      if (err)
//      hasspass2 = err;
//         else

//         hasspass2 = hash;
            
//     });

// console.log(hasspass);
// console.log("This is second hashed password - " + hasspass2);
// app.use(console.log("test"));

// app.use(function() {
//     bcrypt.hash("12345", 10, function(err, hash)
//     {
//      if (err)
//             {(console.log(err));
//             }
//             (console.log(hash));
            
//     }

// );
// })




// catch 404 and forward to error handler  
app.use(function(req, res, next) {  
    var err = new Error('Not Found');  
    err.status = 404;  
    next(err);  
});  
// error handlers  
// development error handler  
// will print stacktrace  
if (app.get('env') === 'development') {  
    app.use(function(err, req, res, next) {  
        res.status(err.status || 500);  
        res.render('error', {  
            message: err.message,  
            error: err  
        });  
    });  
}  
// production error handler  
// no stacktraces leaked to user  
app.use(function(err, req, res, next) {  
    res.status(err.status || 500);  
    res.render('error', {  
        message: err.message,  
        error: {}  
    });  
}); 
// console.log(__dirname);
// app.listen(3000, _ => console.log("Server is Up") );
console.log("Server is Up"); 
module.exports = app;   