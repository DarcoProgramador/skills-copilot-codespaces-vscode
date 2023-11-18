// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [];

// Use body-parser to parse JSON body
app.use(bodyParser.json());

// GET
app.get('/comments', (req, res) => res.json(comments));

// POST
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// DELETE
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    comments.splice(index, 1);
    res.json(id);
});

// PUT
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = req.body;
    const index = comments.findIndex(comment => comment.id === id);
    comments[index] = comment;
    res.json(comment);
});

// Listen
app.listen(port, () => console.log(`Server listening on port ${port}!`));