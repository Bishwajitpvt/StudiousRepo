import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/UserModel.js";

const app = express();

//  database connection
const url = "mongodb+srv://Bishwajit:bishwajitsam@studiousrepo.z4evxkf.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const PORT = 3001;
app.use(cors());

app.use(express.json());

// AuthRoute.js => 

app.post("/sign-up", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const preUser = await UserModel.find({ email: email });
        console.log(preUser);
        if (preUser.length < 1) {
            const User = await UserModel.create({ first_name, last_name, email, password });
            console.log(User);
            res.status(200).json(User);
        } else {
            res.status(400).json({ error: "Email Already Exists" });
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error })
    }
})

app.post("/sign-in", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        const User = await UserModel.findOne({ email: email, password: password })
        console.log(User)
        if (User) {
            res.status(200).json(User);
        } else {
            res.status(403).json({ error: "Invalid email / password" });
        }
    } catch (error) {
        res.status({ error: error });
    }
})


mongoose.connect(url, connectionParams)
    .then(() => app.listen(PORT, () => (
        console.log(`Connected to the database and running on port ${PORT}`)
    )))
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    });
