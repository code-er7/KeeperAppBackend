import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : String,
    content :String,
});
 export const Note = mongoose.model("Note" , schema);

