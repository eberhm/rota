module.exports = function(app) {
	app.configure(function() {
		//use of static middleware
		app.use(express.static(__dirname+'/../public'));
		app.use(express.router);
	});
};