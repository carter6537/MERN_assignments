const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("./server/config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({extended: true}));

const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);

app.listen(8000, () => {
    console.log("you are now listening at port 8000")
})