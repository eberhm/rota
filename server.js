express = require('express');

app = express.createServer();

//routes
//require('./routes')(app);
//configurations
require('./configurations')(app);



app.listen(8080);
console.log("Estoy oyendo por express en la la direccion %s y mi directorio es %s", app.address().port, __dirname);