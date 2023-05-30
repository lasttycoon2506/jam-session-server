import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

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
