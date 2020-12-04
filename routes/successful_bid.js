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
var sql_query = 'SELECT * FROM bids_for';

//GET
router.get('/', function(req, res, next) {
    pool.query(sql_query, (err, data) => {
  		res.render('successful_bid', { title: 'Month with the highest number of jobs', data: data.rows });
  	});
});

// POST
router.post('/', function(req, res, next) {

	pool.query(insert_query, (err, data) => {
		res.redirect('/index')
	});
});

module.exports = router;
