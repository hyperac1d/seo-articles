//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/search-engine-marketing', function(req, res){
  res.sendFile(path.join(__dirname, 'views/sem.html'));
});
app.get('/on-page-and-off-page-techniques', function(req, res){
  res.sendFile(path.join(__dirname, 'views/on-off-page.html'));
});
app.get('/mobile-responsive-tools', function(req, res){
  res.sendFile(path.join(__dirname, 'views/mobile-responsive.html'));
});

app.get('/hyperlinking-backlinking', function(req, res){
  res.sendFile(path.join(__dirname, 'views/backlinking.html'));
});
app.get('/organic-traffic', function(req, res){
  res.sendFile(path.join(__dirname, 'views/organic-traffic.html'));
});
app.get('/website-needs-seo', function(req, res){
  res.sendFile(path.join(__dirname, 'views/webseo.html'));
});
app.get('/website-without-seo', function(req, res){
  res.sendFile(path.join(__dirname, 'views/withoutSEO.html'));
});
app.get('/seo-ethics', function(req, res){
  res.sendFile(path.join(__dirname, 'views/SEOethics.html'));
});
app.get('/successful-blog', function(req, res){
  res.sendFile(path.join(__dirname, 'views/html10.html'));
});

// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, 'views/404.html'));
// });

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
