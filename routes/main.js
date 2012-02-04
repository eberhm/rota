module.exports = function(app) {
	app.get('/main/:id', function (req, res){
		res.send('este es el temita '+req.params.id);
	});
};