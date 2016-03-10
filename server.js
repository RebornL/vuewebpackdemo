var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('views',path.resolve(__dirname,'dist'));
app.set('view engine','ejs');
app.engine('ejs',require('ejs').__express);
app.engine('html',require('ejs').renderFile);//读取html结尾文件

//设置静态文件路径
app.use(express.static(path.resolve(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index.html');
});
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

console.log('server start at port 8000');
// console.log(path.resolve(__dirname,'dist'));
http.createServer(app).listen(8000);