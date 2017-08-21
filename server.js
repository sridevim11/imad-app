var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
   articleOne:{
    title:"Article One",
    heading:"Article1",
    date:"Sept, 2017",
    content:`
    <div class="container">
     <div>
        <a href="/">Home</a>
    </div>

    <h1>
    This is my article one and my webpage
    </h1>
    <p>
        sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df vsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfvsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df
    </p>
    </div>`},
    
    articleTwo:{
    title:"Article Two",
    heading:"Article2",
    date:"Oct, 2017",
    content:`
    <div class="container">
     <div>
        <a href="/">Home</a>
    </div>

    <h1>
    This is my article two and my webpage
    </h1>
    <p>
        sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df vsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfvsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df
    </p>
    </div>`},
    articleThree:{
    title:"Article Three",
    heading:"Article3",
    date:"Nov, 2017",
    content:`
    <div class="container">
     <div>
        <a href="/">Home</a>
    </div>

    <h1>
    This is my article three and my webpage
    </h1>
    <p>
        sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df vsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd df sdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfvsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd dfsdfsdfs fs fdfs sdfsfd df
    </p>
    </div>`
}};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
                <html>
                    <head>
                        <title>
                            ${title}
                        </title>
                        <meta name="viewport" content="width-device-width initial-scale=1">
                        <link href="/ui/style.css" type="text/css" rel="stylesheet"/>
                    </head>
                <body>
                   <div class="container">
                    <h1>
                        ${heading}
                    </h1>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                    </div>
                </body>
                </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one',function(req,res){
   res.send(createTemplate(articleOne)) ;
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article-two.html')) ;
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article-three.html')) ;
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit/:name',function(req,res) {
    
    var name=req.params.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
