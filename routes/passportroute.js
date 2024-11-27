import express from "express";
import cors from "cors";
import bodyParser  from "body-parser";
import multer from "multer";
import path from "path";
import Passport from "../models/Passport.js";


const app = express.Router();




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ storage:storage })

app.use(cors());
app.use(bodyParser.json());

app.post('/passport', upload.fields([{name:"files"}, {name:"file1"},{name:"file2"},{name:"file3"}]), 
async (req, res) => {
   
    console.log(req.files.files[0].filename)
    console.log(req.files.file1[0].filename)
    console.log(req.files.file2[0].filename)
    console.log(req.files.file3[0].filename)

});

export default app;
