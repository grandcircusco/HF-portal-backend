var express = require("express");
var portal = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/HF-portal';

portal.use(bodyParser.urlencoded({ extended: false }));

portal.set('port', (process.env.PORT || 3000));

var server = portal.listen(portal.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Sample app is listening at http://%s:%s', host, port);
});


portal.get('/', function(req, res) {
  res.send('hi');
});

//CREATE
portal.post('/fellows', function(req, res){
  console.log('request: ', req.body);

  var results = [];

  var fellow = {
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    university: req.body.university,
    technologies: req.body.technologies,
    greeting: req.body.greeting,
    password: req.body.password
  };

  pg.connect(connectionString, function(err, client, done){

    client.query('INSERT INTO fellows(username, email, first_name, last_name, university, technologies, greeting) values($1, $2, $3, $4, $5, $6, $7)',
      [fellow.username, fellow.email, fellow.first_name, fellow.last_name, fellow.university, fellow.technologies,   fellow.greeting]);

    client.query('INSERT INTO users(username, password) values($1, $2)', [fellow.username, fellow.password]);

    var query = client.query('SELECT * FROM fellows ORDER BY email ASC;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      client.end();
      return res.json(results);
    });

    if(err){
      console.log(err);
    }
  });
});

//READ
portal.get('/fellows', function(req, res){

  var results = [];

  pg.connect(connectionString, function(err, client, done){
    var query = client.query('SELECT * FROM fellows ORDER BY email ASC;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      client.end();
      return res.json(results);
    });
  });
});

//UPDATE
portal.put('/fellows/:fellow_id', function(req, res){
  var results = [];

  var username = req.params.fellow_id;

  var fellow = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    university: req.body.university,
    technologies: req.body.technologies,
    greeting: req.body.greeting
  };

  pg.connect(connectionString, function(err, client, done) {
    client.query('UPDATE fellows SET email=($1), first_name=($2), last_name=($3), university=($4), technologies=($5), greeting=($6) WHERE username=($7)', [fellow.email, fellow.first_name, fellow.last_name, fellow.university, fellow.technologies, fellow.greeting, username]);

    var query = client.query('SELECT * FROM fellows ORDER BY email ASC;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      client.end();
      return res.json(results);
    });
  });
});

//BALEETED
portal.delete('/fellows/:fellow_id', function(req, res){
  var results = [];

  var username = req.params.fellow_id;

  pg.connect(connectionString, function(err, client, done) {

    client.query('DELETE FROM fellows WHERE username=($1)', [username]);


    var query = client.query('SELECT * FROM fellows ORDER BY email ASC;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      client.end();
      return res.json(results);
    });
  });
});