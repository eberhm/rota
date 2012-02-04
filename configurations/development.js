module.exports = function(app) {
	app.configure('development', function() {
		//show exceptions with debug trace, etc
		app.use(express.errorHandler({
			showStack : true,
			showMessage : true,
			dumpExceptions : true
		}));		
	});
};