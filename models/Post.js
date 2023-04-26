import mongoose from 'mongoose'

mongoose.connect(
    "mongodb://localhost:27017/music_db",
    { useNewUrlParser: true }
)

const db = mongoose.connection

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!")
})

const findPostSchema = mongoose.Schema({
    userId: { type: Number },
    instrument: { type: String, required: true },
    experience: { type: String, required: true },
    genre: { type: String, required: true },
    availability: { type: String, required: true },
    recording: { type: Number, required: true }
})

const sellPostSchema = mongoose.Schema({
    userId: { type: Number },
    purpose: { type: String, required: true },
    photos: { type: Photo, required: true },
    profileLink: { type: String, required: true },
})

const FindPost = mongoose.model('FindPost', findPostSchema)
const SellPost = mongoose.model('SellPost', sellPostSchema)

const createFindPost = async (instrument, experience, genre, availability, recording) => {
    const findPost = new FindPost({ instrument, experience, genre, availability, recording })
    return findPost.save()
}

const createSellPost = async (purpose, photos, profileLink) => {
    const sellPost = new SellPost({ purpose, photos, profileLink })
    return sellPost.save()
}

const retrieveFindPosts = async (userId) => {
    const findPosts = await FindPost.findById({userId: userId })
    return findPosts
}

const retrieveSellPosts = async (userId) => {
    const sellPosts = await SellPost.findById({userId: userId })
    return sellPosts
}

const retrieveAllPosts = async () => {
    // needs work - search how to combine
    const allPosts = FindPost.find() + SellPost.find()
    return allPosts
}

export { createSellPost, retrieveSellPosts, createFindPost, retrieveFindPosts, retrieveAllPosts } 
