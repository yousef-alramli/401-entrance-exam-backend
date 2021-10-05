"use strict";

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

const {
    allWatchesConmtroller,
    getFavController,
    creatFavController,
    deleteFavController,
    updateFavController } = require('./controllers/Fav.controller');

const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(`${MONGO_URL}`, { useNewUrlParser: true });

app.listen(process.env.PORT);

app.get("/watches", allWatchesConmtroller);

app.get("/fav", getFavController);
app.post("/ceateFav", creatFavController);
app.delete("/deleteFav/:id", deleteFavController)
app.put("/updateFav/:id", updateFavController)