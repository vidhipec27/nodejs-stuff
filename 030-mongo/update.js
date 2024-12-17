import dbConnect from "./mongodb.js";

const updateData = async () => {
    let db = await dbConnect();
    let result = await db.updateMany( //2 parameters, {filter}, {change}
        {
            name:"note 5"
        },  
        {
            $set: {name: "note 5 extreme pro max"}
        }
    );
    console.log(result);
}
updateData();