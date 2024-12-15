import data from "./data.js";
import * as http from 'http';

http
.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(data));
    response.end();
})
.listen(3002, () => {
    console.log("Server is listening!");
});
console.log("hello?");