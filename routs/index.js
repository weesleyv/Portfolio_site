const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//An "index" route  to render the "Home" page with the locals set to data.projects
router.get('/', (req, res) => {
	res.render('index', { projects })
})

//An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
	res.render('about')
})

//Dynamic "project" routes (/project/:id) based on the id of the project that render a customized version of the Pug project template to show off each project
router.get('/project/:id', (req, res) => {
	const { id } = req.params;
	const project = projects[id];
	res.render('project', project);
})

module.exports = router;
