import { Double, MongoClient } from 'mongodb'
const url = 'mongodb://127.0.0.1:27017'; // Correct format
const database = 'e-comm';

const client = new MongoClient(url);


async function dbConnect() {
    let result = await client.connect();
    console.log('hello its me');
    let db = result.db('e-comm');
    return db.collection('products'); //a promise is being returned

    // let response = await collection.find({}).toArray()
    // console.log(response);
    // console.log("hello is there even anything here?");
}

export default dbConnect;