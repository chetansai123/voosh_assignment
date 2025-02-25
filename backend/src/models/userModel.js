import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;