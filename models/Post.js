import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    type: { type: String, required: true },
    instrument: String,
    experience: String,
    genres: [],
    availability: { type: String, required: true },
    recordingExperience: String,
    description: String,
    imagePaths: [],
    profileLink: String
});

const Post = mongoose.model('Post', postSchema);

export default Post;
