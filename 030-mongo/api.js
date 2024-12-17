import express from 'express';
import dbConnect from './mongodb.js';
import mongodb from 'mongodb';
const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    response.send(data);
})

app.post('/', async (request, response) => {
    // console.log(request.body);
    let data = await dbConnect();
    let result = await data.insertOne(request.body);
    response.send(result);
})

app.put('/:xyz', async (request, response) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:request.params.xyz},
        {$set: request.body});
    response.send({name:"this is working yaya"});
})

app.delete('/:id', async (request, response) => {
    console.log(request.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne(
        {
            _id: new mongodb.ObjectId(request.params.id)
        }
    )
    // console.log(result);
    response.send(result);
})
app.listen(5001);