import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const publicPath = path.join(`${__dirname}/public`);
console.log(`hello`)
console.log(publicPath);

app.use(express.static(publicPath));
app.listen(4400);