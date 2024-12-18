import express, { response } from 'express';
import { EventEmitter } from 'node:events';
const app = express();
const event = new EventEmitter();

let count = 0

event.on("countAPI", () => {
    count++;
    console.log(`called ${count} times`);
})

app.get('/', (request, response) => {
    response.send("hi welcome to the home page!");
    event.emit("countAPI");
})

app.get('/login', (request, response) => {
    response.send("this is the login page and you should login now");
    event.emit("countAPI");
})

app.get('/upload', (request, response) => {
    response.send("welcome to the uploads page! you may upload anything");
    event.emit("countAPI");
})

app.listen(5020);

