import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    instrument: String,
    experience: String,
    genres: [],
    availability: String,
    recordingExperience: String,
    description: String,
    imagePath: String,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
