import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
   title: String,
   slug: { type: String, unique: true },
   content: String,
   author: String,
   createdAt: { type: Date, default: Date.now },
   views: { type: Number, default: 0 },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
