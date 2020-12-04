var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* --- V7: Using dotenv     --- */
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* --- V2: Adding Web Pages --- */
var aboutRouter = require('./routes/about');
/* ---------------------------- */

/* --- V3: Basic Template   --- */
var tableRouter = require('./routes/table');
var loopsRouter = require('./routes/loops');
/* ---------------------------- */

/* --- V4: Database Connect --- */
var selectRouter = require('./routes/select');
/* ---------------------------- */

/* --- V5: Adding Forms     --- */
var formsRouter = require('./routes/forms');
/* ---------------------------- */

/* --- V6: Modify Database  --- */
var insertRouter = require('./routes/insert');
/* ---------------------------- */
// login
var loginRouter = require('./routes/login');

// caretaker
var caretakerRouter = require('./routes/caretaker');

// admin
var adminRouter = require('./routes/admin');

// pet owner
var petOwnerRouter = require('./routes/petowner');

// caretaker availability
var caretaker_availRouter = require('./routes/caretaker_availability');

// owned pets
var owned_petsRouter = require('./routes/owned_pets');

// caretaker history
var caretaker_historyRouter = require('./routes/caretaker_history');

// caretaker salary
var caretaker_salaryRouter = require('./routes/caretaker_salary');

// total pets taken care of
var total_petsRouter = require('./routes/total_pets');

// total salary to be paid
var total_salaryRouter = require('./routes/total_salary');

// month with highest jobs
var highest_jobsRouter = require('./routes/highest_jobs');

// underperforming caretaker
var underperformingRouter = require('./routes/underperforming');

// bidding page
var biddingRouter = require('./routes/bidding');

// successful bid
var succesful_bidRouter = require('./routes/successful_bid');

// add pets
var add_petsRouter = require('./routes/add_pets');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/* --- V2: Adding Web Pages --- */
app.use('/about', aboutRouter);
/* ---------------------------- */

/* --- V3: Basic Template   --- */
app.use('/table', tableRouter);
app.use('/loops', loopsRouter);
/* ---------------------------- */

/* --- V4: Database Connect --- */
app.use('/select', selectRouter);
/* ---------------------------- */

/* --- V5: Adding Forms     --- */
app.use('/forms', formsRouter);
/* ---------------------------- */

/* --- V6: Modify Database  --- */
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/insert', insertRouter);
/* ---------------------------- */

// login
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/login', loginRouter);

// caretaker
app.use('/caretaker', caretakerRouter);

// admin
app.use('/admin', adminRouter);

// pet owner
app.use('/petowner', petOwnerRouter);

// caretaker availability
app.use('/caretaker_availability', caretaker_availRouter);

// owned pets
app.use('/owned_pets', owned_petsRouter);

// caretaker history
app.use('/caretaker_history', caretaker_historyRouter);

// caretaker salary
app.use('/caretaker_salary', caretaker_salaryRouter);

// total pets taken care of
app.use('/total_pets', total_petsRouter);

// total salary to be paid
app.use('/total_salary', total_salaryRouter);

// month with highest jobs
app.use('/highest_jobs', highest_jobsRouter);

// underperforming caretaker
app.use('/underperforming', underperformingRouter);

// bidding page
app.use('/bidding', biddingRouter);

// successful bid
app.use('/successful_bid', succesful_bidRouter);

// add pets
app.use('/add_pets/', add_petsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
