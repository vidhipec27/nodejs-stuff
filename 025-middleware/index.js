import express from 'express';
const app = express();

app.get('/', (request, response) => {
    response.send('Welcome to home page');
})
app.listen(3003);