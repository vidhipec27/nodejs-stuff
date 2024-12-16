import express from 'express';
const app = express();

const requestFilter = (request, response, next) => {
    console.log('request filter');
    if (!request.query.age)
        response.send('Please enter an age!');
    else if (request.query.age < 18)
        response.send('You may not be able to access this page');
    else
        next();
}

app.use(requestFilter);

app.get('/', (request, response) => {
    response.send('Welcome to home page');
})


app.listen(3003);