import dbConnect from './mongodb.js';
// dbConnect().then((response) => {
//     response.find().toArray().then((data) => {
//         console.log(data);
//     })
// })
// console.log(dbConnect());

//modern syntax:
const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:"iphone 16"}).toArray();
    console.log(data);
}
main();
