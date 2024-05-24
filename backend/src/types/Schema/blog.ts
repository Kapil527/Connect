import mongoose from "mongoose";

export interface BlogSchemaType {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  authorName: string;
  userImage: string;
  date: Date;
  content: string;
}
