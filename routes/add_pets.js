var express = require('express');
var router = express.Router();
var login = require('./login');

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

var name = 'Rose';

/* SQL Query */
var sql_query       = 'SELECT * FROM petowner NATURAL JOIN owns';
var nonadmin_query  = 'INSERT INTO nonadmin VALUES';
var caretaker_query = 'INSERT INTO petowner VALUES';
var update_query    = 'UPDATE petowner SET';

//GET
router.get('/', function(req, res, next) {
    pool.query(sql_query, (err, data) => {
  		res.render('add_pets', { title: "Enter your pet's information", data: data.rows });
  	});
});

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
	var name     = login.name;
	var phone    = login.phone;
	var address  = req.body.address;
	var transfer = req.body.transfer;
	var c_card   = req.body.c_card;
	var date     = req.body.date;

	// Construct Specific SQL Query
	if (date.length == 0) {
	    var insert_query = nonadmin_query + "('" + name + "','" + phone + "','"  + address + "','" + 1 + "');"
	                     + caretaker_query + "('" + name + "','" + phone + "','" + address + "','" + 1 + "','" + c_card + "');";

	    pool.query(insert_query, (err, data) => {
        	res.redirect('/petowner');
        });
	} else {
	    var insert_query = update_query + "require_date = " + date + " WHERE name = " + name + " AND phone = " + phone + ";";

	    pool.query(insert_query);
        res.redirect('/caretaker_availability');

	}

    module.exports.date = date;
});

module.exports = router;
