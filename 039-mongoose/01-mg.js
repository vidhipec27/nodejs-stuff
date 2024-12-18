import mongoose, { mongo, Schema } from "mongoose";

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({"name": "m8", "price": 1000});
    let result = await data.save();
    console.log(result);
}
main();