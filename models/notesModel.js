import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
      },
      users: [{
        type: mongoose.Types.ObjectId,
        ref: "users"
    }],
}, { timestamps: true })

export default mongoose.model('category', notesSchema)