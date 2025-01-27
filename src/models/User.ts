import mongoose from "mongoose";
import { IUser } from "@/types/types";

const UserSchema = new mongoose.Schema<IUser>({
   name: String,
   email: String,
   bio: String,
   role: String,
   lastLogin: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
