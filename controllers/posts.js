import Post from '../models/Post.js'

export const getAllPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
};

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId: userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
};

export const createPost = async (req, res) => {
    try {
        const { userId } = req.params;
        const { type, instrument, experience, genres, availability, recordingExperience, description, imagePaths } =
        req.body;
        const post = await new Post({ userId: userId, type: type, instrument: instrument, experience: experience, genres: genres,
        availability: availability, recordingExperience: recordingExperience, description: description, imagePaths: imagePaths });
        post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

export const deletePost = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedPost = await Post.deleteOne({ userId: userId });
        if (deletedPost.deletedCount === 1) {
            res.status(204).send()
        }
        else {
            res.status(500).json({ Error: 'corresponding post not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};


