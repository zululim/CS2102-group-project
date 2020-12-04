var express = require('express');
var router = express.Router();

const { Pool } = require('pg')
const pool = new Pool({
    connectionString:process.env.DATABASE_URL
})

/* SQL Query */
var sql_query = 'INSERT INTO users VALUES';

// GET
router.get('/', function(req, res, next) {
	res.render('login', { title: 'Login Page' });
});

// POST
router.post('/', function(req, res, next) {
	// Retrieve Information
	var phone = req.body.phone;
	var name  = req.body.name;
	var user  = req.body.user;

	// Construct Specific SQL Query
	if (user === "PCS admin") {
    	var insert_query = sql_query + "('" + phone + "','" + name + "');";
    	pool.query(insert_query, (err, data) => {
        	res.redirect('/admin')
        });
	} else if (user === "Caretaker") {
    	var insert_query = sql_query + "('" + phone + "','" + name + "');";
    	pool.query(insert_query, (err, data) => {
        		res.redirect('/caretaker')
        });
	} else {
	    var insert_query = sql_query + "('" + phone + "','" + name + "');";
        pool.query(insert_query, (err, data) => {
        	res.redirect('/petowner')
        });
	}

	module.exports.name = name;
	module.exports.phone = phone;
});

module.exports = router;