var cars = require('./../models/cars')

module.exports = {
    index: function(req, res, next) {
      res.status(200).json(cars);
    },
    show: function(req, res, next) {
      var carId = parseInt(req.params.id);
      res.status(200).json(cars[carId]);
    },
    create: function(req, res, next) {
      cars.push(req.body);
      res.status(200).json(cars)
    },
    update: function(req, res, next) {
      var carId = parseInt(req.params.id);
      cars[carId] = req.body;
      res.status(200).json(cars[carId])
    },
    destroy: function(req, res, next) {
        var deletedCar = cars[req.params.id]['name'];
        var splicedCars = cars.splice(req.params.id);
        res.status(200).json("You just deleted the " + deletedCar);
      }
      // destroy: function(req, res, next) {
      //   var carId = parseInt(req.params.id);
      //   res.status(200).json("deleted car at: " + carId);
      // }
  }
  /* If I wanted to allow for mutiple deletes==== I might do:

  destroy: function(req, res, next) {
    var splicedCars = cars.splice(req.params.id);
    var deletedCar = splicedCars[0];
    res.status(200).json("You just delted " + deletedCar);
  }



  */
