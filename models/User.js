import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        require: true,
        auto: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    instruments: {
        type: Object,
        required: false
    },
    genres: {
        type: String,
        required: false
    },
    availability: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;

