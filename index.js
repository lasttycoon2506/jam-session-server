import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import helmet from "helmet";
import usersRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(
//   cors({
//     origin: "*",
//     exposedHeaders: "Access-Control-Allow-Origin",
//   })
// );

/* File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

/* Routes with Files */
// app.post("/posts", upload.single("picture"), createPost);

/* Routes */
app.use("/users", usersRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

/* MongoDB Setup */
const PORT = process.env.PORT || 4001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
