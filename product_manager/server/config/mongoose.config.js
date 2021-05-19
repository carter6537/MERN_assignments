const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected to database"))
    .catch(err => console.log("error connecting to database", err))