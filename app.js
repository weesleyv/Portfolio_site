const express = require('express');
const routs = require('./routs/index.js');

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use(routs);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
	console.log(err);
})

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
})

app.listen(3000, () => {
	console.log('listening on port 3000')
} )

