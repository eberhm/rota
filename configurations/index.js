var fs = require('fs');

module.exports = function(app) {
	fs.readdirSync(__dirname).forEach(function(file) {
		var indexOfExtension = file.indexOf('.js');
		if (file == 'index.js' || -1 === indexOfExtension) return;
		var name = file.substr(0, indexOfExtension);
		console.log('loading file ' + __dirname + '/' + file);
		require('./'+name)(app);
	});
};