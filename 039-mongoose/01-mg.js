import mongoose, { mongo, Schema } from "mongoose";
await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

const saveInDb = async () => {
    const product = mongoose.model('products', productSchema);
    let data = new product({
        "name": "google pixel pro",
        "brand": "google",
        "price": 349,
        "category": "mobile"
    });
    let result = await data.save();
    console.log(result);
}
// saveInDb();

const updateInDb = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.updateOne(
        {
            "name": "note 101010"
        },
        {
            $set: {
                "name": "note 10",
                "price": 289
            }
        }
    )
    console.log(data);
}
// updateInDb();

const deleteInDb = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteMany(
        {
            "name": "google pixel pro"
        }
    )
    console.log(data);
}
deleteInDb();

const findInDb = async () => {
    const product = mongoose.model('products', productSchema);
    let data = await product.find( {name : "google pixel pro"});
    console.log(data);
}
findInDb();