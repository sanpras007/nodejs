const routes = require('express').Router();

const userControllers = require('../controllers/userExpressControllers');

routes.get('/readuser', userControllers.readuser);

routes.get('/readSpecificUser', userControllers.readSpecificUser);

routes.post('/createUser', userControllers.createUser);

routes.put('/update', userControllers.update);

routes.delete('/deleteDetails/:id', userControllers.deleteDetails);

module.exports = routes; 