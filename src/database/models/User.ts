import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  email: String,
  level: String,
  name: String,
  nickname: String,
  playSide: String,
  telephoneNumber: Number,
});

const User = model("User", usersSchema, "users");

export default User;
