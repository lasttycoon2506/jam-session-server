import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("User");
})

userRouter.get("/new", (req, res) => {
    res.send("New User");
})

userRouter.post('/', (req, res) => {
    res.send('Create User');
})

userRouter
    .route("/:id")
    .get((req, res) => {
        res.send(`Get User ${req.params.id}`)
    })
    .post((req, res) => {
        res.send(`Post User ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User ${req.params.id}`)
    })

userRouter.param("id", (req, res, next, id) => {
    console.log(id)
})

export default userRouter