import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//AsyncHandler version
const getAllUsers = asyncHandler(async (req, res, next) => {
    const allUsers = await User.find({});
    res.send(allUsers);
})

const getUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.find({userId: id });
    res.send(user);
})

const createUser = asyncHandler(async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const instruments = req.body.instruments;
    const genres = req.body.genres;
    const availability = req.body.availability;
    const experience = req.body.experience;

    const user = await new User( {
        email: email,
        password: password,
        location: location,
        instruments: instruments,
        genres: genres,
        availability: availability,
        experience: experience
    })
    user.userId = user._id.toString();
    user.save();

    res.send(user);
})

const updateUserById = asyncHandler(async (req, res, next) => {

    const paramId = req.params.id
    const updatedFields = req.body

    const updatedUser = await User.updateOne(
        {userId: paramId},
        {$set: updatedFields}
    )
    res.send(updatedUser)
})

const deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.deleteOne({ userId: id });
    res.send(user);
})

// Mostly for wiping db of test users for now
const deleteAllUsers = asyncHandler(async (req, res, next) => {
  const user = await User.deleteMany();
  res.send(user);
});

//Conventional versions

// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(404);
//   }
// };

// const getUser = async (req, res) => {
//   try {
//     const users = await User.find({ userId: req.parmas.id }); // might need to add a timeout
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(404);
//   }
// };

// const createUser = async (req, res) => {
//   try {
//     const email = req.body.email;
//     const password = req.body.password;
//     const location = req.body.location;
//     const instruments = req.body.instruments;
//     const genres = req.body.genres;
//     const availability = req.body.availability;
//     const experience = req.body.experience;

//     const user = await new User({
//       email: email,
//       password: password,
//       location: location,
//       instruments: instruments,
//       genres: genres,
//       availability: availability,
//       experience: experience,
//     });

//     user.userId = user._id.toString();
//     user.save();

//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400);
//   }
// };

// const updateUserById = async (req, res) => {
//   try {
//     const paramId = req.params.id;
//     const updatedFields = req.body;

//     const updatedUser = await User.updateOne( // might need to add a timeout
//       { userId: paramId },
//       { $set: updatedFields }
//     );
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(404);
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.deleteOne({ userId: id }); 
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(404);
//   }
// };

export default getAllUsers;
export {
  getAllUsers,
  getUser,
  createUser,
  updateUserById,
  deleteUser,
  deleteAllUsers,
};
