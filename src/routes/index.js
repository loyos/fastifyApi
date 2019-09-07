// Import our Controllers
const carController = require('../controllers/carController')
const ipController = require('../controllers/ipController')
const Car = require('../models/Car')
const Ip = require('../models/Ip')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: Car.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },
  {
    method: 'GET',
    url: '/api/ip',
    handler: ipController.getIp
  },
  {
    method: 'POST',
    url: '/api/ip',
    handler: ipController.addIp,
    schema: Ip.addIpSchema
  },
  
]

module.exports = routes