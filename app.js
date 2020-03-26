const express = require('express');
const routs = require('./routs/index.js');
const PORT = process.env.PORT || 3000;

//new express app
const app = express();

//set “view engine” to “pug”
app.set('view engine', 'pug');

//serve the static files located in the public folder
app.use('/static', express.static('public'));

//use routs
app.use(routs);

//error handler that sets the error message and sets the status code.
app.use((req, res, next) => {
	const err = new Error('Page Not Found');
	err.status = 404;
	next(err);
	console.error(err);
})

//error handling middleware to render a Pug template
app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
})

app.listen(PORT, () => {
	console.log('listening on port 3000')
} )

