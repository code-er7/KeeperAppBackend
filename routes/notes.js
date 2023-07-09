import express from "express";
import { addNewNote, deleteNote, getAllNotes } from "../controllers/notes.js";


const router = express.Router();
router.post("/new" , addNewNote);
router.get("/all" , getAllNotes);
router.delete("/del/:id" , deleteNote);

export default router;