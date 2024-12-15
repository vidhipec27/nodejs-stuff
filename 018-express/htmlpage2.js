import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const publicPath = path.join(`${__dirname}/public`);
console.log(publicPath);
app.set('view engine', 'ejs');

// console.log(`hello`)
// console.log(publicPath);

// app.use(express.static(publicPath));
app.get('', (request, response) => {
    response.sendFile(`${publicPath}/index.html`);
});
app.get('/about', (_, response) => {
    response.sendFile(`${publicPath}/about.html`);
});
app.get('/profile', (_, response) => {
    // const user = {
    //     name: "bidi",
    //     email: "vidhi@google.com",
    //     city: "badabing"
    // }
    // response.render('profiles', {user});
    response.render('profiles');
})
app.get('*', (_, response) => {
    response.sendFile(`${publicPath}/error.html`);
});
app.listen(4300);