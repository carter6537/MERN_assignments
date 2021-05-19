const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:setup", JokeController.findAJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:id", JokeController.delete);
}