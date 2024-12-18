import express from 'express';
import multer from 'multer';

const app = express();

const upload = multer( //this function will act as a middleware (second paramter in the app.post() thing)
    {
        storage : multer.diskStorage({
            destination: function (request, file, callback) {
                callback(null, "uploads"); //write the name of the file you want to upload into
            },
            filename: function (request, file, callback) {
                callback(null, `${file.fieldname}-${Date.now()}.jpg`);
            }
        })
    }
).single("user_file");

app.post('/upload', upload, async (request, response) => {
    response.send("file uploaded");
})

app.listen(5010);