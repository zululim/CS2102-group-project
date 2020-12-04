var express = require('express');
var router  = express.Router();
var petowner = require('./petowner');

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
var date = petowner.date
var sql_query = 'SELECT month FROM pet_days WHERE pet_days = (SELECT MAX(count) FROM (SELECT SUM(pet_days) AS count FROM pet_days GROUP BY month, year) AS temp)';

//GET
router.get('/', function(req, res, next) {
    pool.query(sql_query, (err, data) => {
  		res.render('highest_jobs', { title: 'Month with the highest number of jobs', data: data.rows });
  	});
});

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
	var address  = req.body.address;
	var transfer = req.body.transfer;
	var c_card   = req.body.c_card;
	var require  = req.body.date;

	// Construct Specific SQL Query
	var insert_query = nonadmin_query + "('" + address + "','" + transfer + "');"
	                 + caretaker_query + "('" + address + "','" + transfer + "','" + c_card + "','" + require + "');";

	pool.query(insert_query, (err, data) => {
		res.redirect('/index')
	});
});

module.exports = router;
