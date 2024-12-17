import express from 'express';
import {requestFilter} from './middleware.js';
const app = express();
const route = express.Router();
// app.use(requestFilter);
route.use(requestFilter);
console.log("hello? whats going on");

app.get('/', (request, response) => {
    response.send('Welcome to home page');
});

app.get('/login', requestFilter, (request, response) => {
    response.send('hi, please login to continue further!'); 
})

route.get('/user', requestFilter, (request, response) => {
    response.send('This is the users page!');
});

route.get('/about', (request, response) => {
    response.send('hippity hoppity get off my property');
});

app.use('/', route);


app.listen(3005);