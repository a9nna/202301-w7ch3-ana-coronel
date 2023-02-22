import { model, Schema } from "mongoose";

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  playSide: {
    type: String,
    required: true,
  },
  telephoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = model("User", usersSchema, "users");

export default User;
