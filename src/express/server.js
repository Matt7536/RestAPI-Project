const express = require('express');
const server = express();
/* const authenticate = require('./middlewares/authenticate');
const register = require('./handlers/register');
const login = require('./handlers/login');
const getUserInfo = require('./handlers/getUserInfo');
const createCard = require('./handlers/createCard');
const getCard = require('./handlers/getCard');
const editCard = require('./handlers/editCard');
const deleteCard = require('./handlers/deleteCard');
const getAllCards = require('./handlers/getAllCards');



server.post('/users/register', register);
server.post('/users/login', login);
server.get('/users/info', authenticate, getUserInfo);
server.post('/cards/create', authenticate, createCard);
server.get('/cards/info', authenticate, getCard);
server.put('/cards/edit', authenticate, editCard);
server.delete('/cards/delete', authenticate, deleteCard);
server.get('/cards/mycards', authenticate, getAllCards); */





server.listen(4000, ()=>console.log('Express status: Listening'));