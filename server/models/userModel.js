// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//     },
//     health_data: [
//         {
//             heart_rate: {
//                 type: Number,
//             },
//             bloodpressure: {
//                 type: String,
//             },
//             oxygen_level: {
//                 type: Number,
//             },
//             sleep_quality: {
//                 type: String,
//             },
//             temperature: {
//                 type: Number,
//             },
//             stress_level: {
//                 type: String,
//             },
//             condition : {
//                 type: String,
//                 default: "Normal",
//             },
//             recorded_at: {
//                 type: Date,
//                 default: Date.now,
//             },
//         }
//     ],
//     parent : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Parent',
//     },
// }, { timestamps: true });

// const User =  mongoose.model('User', userSchema);
// export default User;


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
            blood_pressure: {  // fixed naming to match function
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
            stress_level: {  // changed from String → Number
                type: Number,
            },
            total_daily_steps: {  // added field
                type: Number,
            },
            active_minutes: {  // added field
                type: Number,
            },
            calories_burnt: {  // added field
                type: Number,
            },
            condition: {
                type: String,
                default: "Normal",
            },
            recorded_at: {
                type: Date,
                default: Date.now,
            },
        }
    ],
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parent',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
