// models/Blog.ts
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   slug: {
      type: String,
      required: true,
      unique: true,
   },
   content: {
      type: String,
      required: true,
   },
   author: {
      type: String,
      required: true,
   },
   views: {
      type: Number,
      default: 0,
   },
   images: {
      type: [String], // Array de strings para las rutas de las imágenes
      default: [],
   },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
