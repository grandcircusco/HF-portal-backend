var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/HF-portal';

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE users(username VARCHAR(20) UNIQUE PRIMARY KEY, email VARCHAR(40), first_name VARCHAR(20), last_name VARCHAR(20), university VARCHAR(40), technologies text ARRAY, greeting text)');


// var query = client.query('CREATE TABLE users(username VARCHAR(20) UNIQUE PRIMARY KEY, password VARCHAR(40)');


query.on('end', function() { client.end(); });