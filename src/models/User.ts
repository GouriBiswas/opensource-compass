import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    githubId: {
      type: String,
      required: true,
      unique: true,
    },

    username: {
      type: String,
    },

    name: {
      type: String,
    },

    email: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;