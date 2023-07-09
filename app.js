import express from "express";
import notesRouter from "./routes/notes.js"
import { config } from "dotenv"
import { connectDb } from "./Database/database.js";
import cors from "cors";
const app = express();


config({
    path: "./Database/config.env"
});
app.use(express.json());

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

connectDb();

app.use("/notes", notesRouter);
app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(process.env.PORT, () => {
    console.log(`app is listining of port ${process.env.PORT}`);
})