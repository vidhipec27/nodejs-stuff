import express from 'express';
import {requestFilter} from './middleware.js';
const app = express();
const route = express.Router();
// app.use(requestFilter);
route.use(requestFilter);

app.get('/', (request, response) => {
    response.send('Welcome to home page');
});

app.get('/login', (request, response) => {
    response.send('hi, please login to continue further!'); 
})

route.get('/user', (request, response) => {
    response.send('This is the users page!');
});

route.get('/about', (request, response) => {
    response.send('hippity hoppity get off my property');
});

app.use('/', route);


app.listen(3003);