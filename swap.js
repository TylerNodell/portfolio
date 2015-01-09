var fs = require('fs');
var http = require('http');
// var favicon

var server = http.createServer(function(req,res){

  if (req.url === "/" || req.url === "/favicon.ico" || req.url === "/index.html") {
    fs.readFile("index.html", function(err,data){
      res.end(data.toString());
    });
  } else if (req.url === "/card-stack.css") {
    fs.readFile("card-stack.css", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/swing.js") {
    fs.readFile("swing.js", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/classList.js") {
    fs.readFile("classList.js", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/card-stack.js") {
    fs.readFile("card-stack.js", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/Translational_motion.gif") {
    fs.readFile("Translational_motion.gif", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/large_open_book.png") {
    fs.readFile("large_open_book.png", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/particles.html") {
    fs.readFile("particles.html", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/particles.js") {
    fs.readFile("particles.js", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/app.js") {
    fs.readFile("app.js", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === "/start.html"){
    fs.readFile("start.html", function(err,data){
      res.end(data);
    }); 
  } else if (req.url === "/styles.css") {
    fs.readFile("styles.css", function(err,data)  {
      res.end(data);
    });
  } else if (req.url === '/back.png') {
    fs.readFile("back.png", function(err,data){
      res.end(data);
    });
  } else if (req.url === '/indexstyles.css') {
    fs.readFile("indexstyles.css", function(err,data){
      res.end(data);
    });
  } else if (req.url === '/bookback.png') {
    fs.readFile("bookback.png", function(err,data){
      res.end(data);
    });
  } else {
    var path = req.url;
    path = path.slice(1);
    path = path.toString();

    fs.readFile("print.html",function(err,data){
      var index = data.toString().split("[replace]")

      fs.readFile(path, function(err, data){
        if (err){w
          console.log(path);
          console.log("Read Error");
        } else {
          var text = data.toString();
          text = text.replace(/\n/g,'</br>');
          index.splice(1,0,text);
          index = index.join('');
        }
        res.end(index);
      });
    });
    //back button

  }
});

server.listen(2000);
