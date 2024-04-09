import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: "string", unique: true },
    password: { type: "string", required: true },
    role: { type: "string", default: "true" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("User", userSchema);
