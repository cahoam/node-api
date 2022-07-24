const express = require('express');
const ContactController = require('./controller/ContactController');

const routes = express();

routes.get('/contact',ContactController.index);
routes.get('/contact/:id',ContactController.findById);
routes.post('/contact',ContactController.insert);
routes.delete('/contact/:id',ContactController.delete);
routes.put('/contact/:id',ContactController.update);

module.exports = routes;