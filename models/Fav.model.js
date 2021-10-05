"use strict";

const mongoose = require("mongoose");

let favSchema = new mongoose.Schema({
    title: String,
    description: String,
    toUSD: String,
    image_url: String,
    userEmail: String
})

let favModel = mongoose.model("favorites", favSchema)

module.exports = { favModel }