import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js"

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());

/* MongoDB Setup */
const PORT = process.env.PORT || 4001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

app.get("/", (req, res) => {
  console.log("Home Page")
})

app.use('/users', userRouter)


app.listen(4001);
