var express = require('express');
var bodyParser = require('body-parser');

var carsCtrl = require('./controllers/carsCtrl')

var app = express();

app.use(bodyParser.json());

app.get('/cars', carsCtrl.index);
app.get('/cars/:id', carsCtrl.show);
app.post('/cars', carsCtrl.create);
app.put('/cars/:id', carsCtrl.update);
app.delete('/cars/:id', carsCtrl.destroy);



var port = 3000;
app.listen(port, function() {
  console.log("listening at ", port);
})
