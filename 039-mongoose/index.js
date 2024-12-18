import express from 'express';
import './config.js';
import product from './product.js';

const app = express();
app.use(express.json())
app.post("/create", async (request, response) => {
    let data = new product(request.body);
    let result = await data.save();
    console.log(result);
    response.send(result);
})

app.get("/list", async (request, response) => {
    let data = await product.find();
    response.send(data);
})

app.delete("/delete/:_id", async (request, response) => {
    console.log(request.params);
    let data = await product.deleteOne(request.params);
    response.send("deleted");
})

app.put("/update/:_id", async (request, response) => {
    let data = await  product.updateOne(
        request.params,
        {
            $set: request.body
        }
    )
    response.send(data);
    if (data.acknowledged)
        console.log("successfully updated the record!");
})
app.listen(5999);