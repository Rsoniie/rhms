import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    heart_rate: {
        type: Number
    },
    bloodpressure: {
        type: String,
    },
    oxygen_level: {
        type: Number,
    },
    sleep_quality: {
        type: String,
    },
    temperature: {
        type: Number,
    },
    stress_level: {
        type: String,
    },
}, { timestamps: true });

const User =  mongoose.model('User', userSchema);
export default User;