import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    },
    notes: [{
        type: mongoose.Types.ObjectId,
        ref: "notes"
    }],
    users: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }]
}, { timestamps: true })

export default mongoose.model('categories', categorySchema)