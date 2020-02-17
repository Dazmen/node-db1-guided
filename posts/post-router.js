const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // List of posts
    // Select from posts
    db.select('*').from('posts')
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to get the list of posts' })
        })
    // ALL database operation return a promise
});

router.get('/:id', (req, res) => {
    // a post by its ID
    // select * from posts where id = :id
    db('posts').where({ id : req.params.id })
        .first() // Grabs the first item on the returned array
        .then(post => {
            res.status(200).json(post); // could use post[0] instead
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to get the  post' })
        })
});

router.post('/', (req, res) => {
    // add a post
    // inster into posts () values ()
    db('posts')
        .insert(req.body, 'id') // will generate a warning on console when using sqlite, ignore that
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to add the  post' })
        })
});

router.put('/:id', (req, res) => {
    // update a post
    const id = req.params.id
    const changes = req.body
    db('posts')
        .where({id}) // remember to filkter or all record will be updated WARNING
        .update(changes) // could be partial changes, only one colum is enough
        .then(count => {
            res.status(200).json(count);
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to update the  post' })
        })
        
});

router.delete('/:id', (req, res) => {
    // removes a post
    const id = req.params.id
    db('posts')
        .where({id})
        .del()
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to deletethe  post' })
        })
});

module.exports = router;