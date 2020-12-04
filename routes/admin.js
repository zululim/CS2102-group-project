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
var sql_query = 'SELECT * FROM determines_mpl';
var nonadmin_query  = 'INSERT INTO nonadmin VALUES';
var caretaker_query = 'INSERT INTO caretakers VALUES';

//GET
router.get('/', function(req, res, next) {
    pool.query(sql_query, (err, data) => {
  		res.render('admin', { title: 'PCS Admin Profile Page', data: data.rows });
  	});
});

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
	var search = req.body.search;

	// Construct Specific SQL Query
	if (search === "Total pets") {
        res.redirect('/total_pets')
	} else if (search === "Total salary") {
    	res.redirect('/total_salary')
	} else if (search === "Highest jobs") {
    	res.redirect('/highest_jobs')
    } else {
      	res.redirect('/underperforming')
	}

	module.exports.name = name;
	module.exports.phone = phone;
});

module.exports = router;
