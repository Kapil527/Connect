import mongoose, { Schema, model } from "mongoose";

import { BlogSchemaType } from "types/Schema/blog";

const blogSchema = new Schema<BlogSchemaType>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, require: true },
  authorName: { type: String, require: true },
  userImage: { type: String, requier: true },
  date: { type: Date, require: true },
  content: { type: String, require: true },
});

const Blog = model<BlogSchemaType>("Blog", blogSchema);

export default Blog;
