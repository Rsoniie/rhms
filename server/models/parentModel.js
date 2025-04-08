import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const parentSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    userIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    alerts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, {
    timestamps: true,
});

const Parent = model('Parent', parentSchema);

export default Parent;