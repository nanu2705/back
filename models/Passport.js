import mongoose from "mongoose";


const passportSchema = new mongoose.Schema({
    name:String,
    filename: String,
    path: String,
    size: Number,
    filename1: String,
    path1: String,
    size1: Number,
    filename2: String,
    path2: String,
    size2: Number,
    filename3: String,
    path3: String,
    size3: Number,

    createdAt: { type: Date, default: Date.now }
});

const Passport = mongoose.model('Passport', passportSchema);

export default Passport;