import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true,
      
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw2LUeebdbIyjN5QyeogdWog&ust=1713080635252000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDnxejYvoUDFQAAAAAdAAAAABAE"
    },
},{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;