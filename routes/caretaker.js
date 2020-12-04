var express = require('express');
var router = express.Router();

const { Pool } = require('pg')
/* --- V7: Using Dot Env ---
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '********',
  port: 5432,
})
*/
const pool = new Pool({
	connectionString: process.env.DATABASE_URL
});

/* SQL Query */
var sql_query = 'SELECT * FROM c_ratings';
var nonadmin_query  = 'INSERT INTO nonadmin VALUES';
var caretaker_query = 'INSERT INTO caretakers VALUES';

//GET
router.get('/', function(req, res, next) {
    pool.query(sql_query, (err, data) => {
  		res.render('caretaker', { title: 'Caretaker Profile Page', data: data.rows });
  	});
});

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
	var address  = req.body.address;
	var transfer = req.body.transfer;
	var employed = req.body.employed;

	// Construct Specific SQL Query
	var insert_query = nonadmin_query + "('" + address + "','" + transfer + "');"
	                 + caretaker_query + "('" + address + "','" + transfer + "','" + employed + "');";

	pool.query(insert_query, (err, data) => {
		res.redirect('/caretaker')
	});
});

module.exports = router;
