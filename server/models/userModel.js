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
    health_data: [
        {
            heart_rate: {
                type: Number,
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
            recorded_at: {
                type: Date,
                default: Date.now,
            },
        }
    ],
}, { timestamps: true });

const User =  mongoose.model('User', userSchema);
export default User;