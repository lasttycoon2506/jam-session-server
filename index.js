import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());

/* File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

/* Routes with Files */
app.post("/posts", upload.single("picture"), createPost);

/* Routes */
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MongoDB Setup */
const PORT = process.env.PORT || 4001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
