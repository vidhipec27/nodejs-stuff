import express from 'express';
import './config.js';
import product from './product.js';

const app = express();
app.use(express.json());

app.get('/search/:key', async (request, response) => {
    console.log(request.params.key);
    let data = await product.find(
        {
            "$or": [
                {"name": {$regex: request.params.key}},
                {"brand": {$regex: request.params.key}},
            ]
        }
    );
    response.send(data);
})

app.listen(5005);