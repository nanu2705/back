import express from "express";
import cors from "cors";
import bodyParser  from "body-parser";
import multer from "multer";
import path from "path";
import File from "../models/File.js";
import Passport from "../models/Passport.js";


const app = express.Router();
app.use(cors());
app.use(bodyParser.json());



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ dest: 'uploads/' })

app.post('/passport', upload.fields('photoproof','dobproof','addressproof','nonecr'), (req, res) => {
    try {
        console.log(req.file.filename);
        res.status(200).send('File uploaded successfully');
    } catch (err) {
        res.status(400).send('File upload failed');
    }
});

export default app;
