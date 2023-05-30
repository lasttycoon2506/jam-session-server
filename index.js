import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 600
};

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));

/* File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

/* Routes with Files */
app.post("/posts", verifyToken, upload.single("image"), createPost);

/* Routes */
app.use("/users", usersRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

/* MongoDB Setup */
const PORT = process.env.PORT || 4001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
