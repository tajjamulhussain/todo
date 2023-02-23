import mongoose from "mongoose";
const todoModel = mongoose.Schema({
  name: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});
export default mongoose.model("Todo", todoModel);
