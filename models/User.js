import mongoose from "mongoose";

var Int32 = mongoose.Int32; // Not final, might need to go about getting Integer another way

const userSchema = new mongoose.Schema({
    userId: {
        type: Int32,
        require: true
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

const user = mongoose.model("user", userSchema);
module.exports = user;
