import express from 'express';
const app = express();
app.get('', (request, response) => {
    response.send(`
        <h1>hello this is the home page</h1>
        <a href="/about"> Visit our about page </a>
        `);
});
app.get('/about', (request, response) => {
    response.send(`
        hello this is about page
        <a href="/"> Back to the main page </a>
    `);
});
app.get('/updates', (request, response) => {
    response.send(`welcome to the updates page! we'll let you know if there are any updates`)
})

app.listen(4020);