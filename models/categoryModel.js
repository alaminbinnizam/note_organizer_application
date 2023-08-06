import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }],
}, { timestamps: true })

export default mongoose.model('category', categorySchema)