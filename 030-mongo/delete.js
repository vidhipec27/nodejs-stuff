import dbConnect from "./mongodb.js";

const deletedData = async() => {
    let db = await dbConnect();
    let result = await db.deleteOne({name: "note 5 extreme pro max"});
    console.log(result);
    if (result.acknowledged)
        console.log("data deleted successfully!");
}

deletedData();