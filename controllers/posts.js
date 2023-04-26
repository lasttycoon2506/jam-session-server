import express from 'express'
import * as posts from './Model.mjs'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/posts', (req, res) => {
    posts.retrieveAllPosts()
        .then(allPosts => {
            res.json(allPosts)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'No posts exist' })
        })
})

app.get('/posts/find', (req, res) => {
    posts.retrieveFindPosts(req.body.userId)
        .then(findPosts => {
            res.json(findPosts)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'No find posts by that user exist' })
        })
})

app.get('/posts/sell', (req, res) => {
    posts.retrieveSellPosts(req.body.userId)
        .then(sellPosts => {
            res.json(sellPosts)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'No sell posts by that user exist' })
        })
})

app.post('/posts/find', (req, res) => {
    posts.createFindPost(req.body.instrument, req.body.experience, req.body.genre, req.body.availability, req.body.recording)
        .then(findPost => {
            res.status(201).json(findPost);
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ Error: 'Missing Required Field(s)' })
        })
})

app.post('/posts/sell', (req, res) => {
    posts.createSellPost(req.body.purpose, req.body.photos, req.body.profileLink)
        .then(sellPost => {
            res.status(201).json(sellPost);
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ Error: 'Missing Required Field(s)' })
        })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
