import { Double, MongoClient } from 'mongodb'
// import mongoose from 'mongoose';
const url = 'mongodb://127.0.0.1:27017'; // Correct format

const client = new MongoClient(url);
console.log('all good!');

async function getData() {
    let result = await client.connect();
    console.log('hello its me');
    // let db = result.db(database);
    // let collection = db.collection('products');
    // let response = await collection.find({}).toArray()
    // console.log(response);
}
getData();
console.log('all good!');