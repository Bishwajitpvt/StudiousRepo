import express from "express";
import mongoose from "mongoose";

const app = express();


//  database connection
const url = "mongodb+srv://Bishwajit:bishwajitsam@studiousrepo.z4evxkf.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const PORT = process.env.PORT || 3001;

mongoose.connect(url, connectionParams)
    .then(() => app.listen(PORT, () => (
        console.log(`Connected to the database and running on port ${PORT}`)
    )))
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    });
