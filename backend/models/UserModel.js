import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {
        type: "String",
        required: [true, "First Name is required"]
    },
    last_name: {
        type: "String",
        required: [true, "Last Name is required"]
    },
    email: {
        type: "String",
        unique: true,
        required: [true, "Email is required"]
    },
    password: {
        type: "String",
        required: [true, "Password is required"],
        minlength: [8, "Minimum 8 length required"]
    },
    profilePicture: {
        type: "string",
    },
    phone: {
        type: "String",
    }
});

export default mongoose.model("User", UserSchema);