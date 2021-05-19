const { model } = require("mongoose");
const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes}))
        .catch(err => res.json({message: "something went wrong", error: err}));
};

module.exports.findAJoke = (req, res) => {
    Joke.findOne({setup: req.params.setup})
        .then(singleJoke => res.json({ joke: singleJoke}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
    joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true})
        .then(updatedJoke => res.json({updatedJoke}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.delete = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({ result }))
        .catch(err => res.send(err));
};