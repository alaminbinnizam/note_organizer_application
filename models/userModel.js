import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
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
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    notes: [{
      type: mongoose.Types.ObjectId,
      ref: "notes"
    }],
    category: [{
      type: mongoose.Types.ObjectId,
      ref: "category"
    }]
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);