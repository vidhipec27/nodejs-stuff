import dbConnect from "./mongodb.js";

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany( 
        [
            {
                name: "note 101010",
                brand: "vivo",
                price: 320,
                category: "mobile"
            },
            {
                name: "note 6",
                brand: "vivo",
                price: 320,
                category: "mobile"
            },
            {
                name: "note 7",
                brand: "vivo",
                price: 320,
                category: "mobile"
            }
        ]
    )
    console.log('insert function');

    if (result.acknowledged)
        console.log("data inserted!");
}
insert();