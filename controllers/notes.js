import { Note } from "../models/notes.js"
export const getAllNotes = async(req , res )=>{
    const notes = await Note.find({})
    res.json({
     success:true ,
     notes 
    });
}
export const addNewNote = async (req , res )=>{
    const{ title , content } = req.body ; 
    const note = await Note.create({
     title,
     content
    });
    res.json({
     success:true ,
     message:"Added new Note"
    });
}
export const  deleteNote = async(req , res )=>{
    const {id} = req.params;
    await Note.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"Deleted User Succesfully"
    });
}