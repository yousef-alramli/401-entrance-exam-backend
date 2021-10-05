"use strict";

const axios = require('axios');
const { favModel } = require('../models/Fav.model');

const allWatchesConmtroller = (req, res) => {
    const url = `${process.env.WATCHES_API}`
    axios.get(`${url}`).then(data => {
        res.json(data.data)
    })
}

const getFavController = (req, res) => {

    favModel.find().then(data => {
        res.send(data)
    })
}

const creatFavController = async (req, res) => {
    let favBody = req.body;
    let newFav = favModel(favBody);
    await newFav.save()
    await favModel.find().then(data => {
        res.send(data)
    })
}

const deleteFavController = (req, res) => {
    let favId = req.params.id;
    favModel.findByIdAndDelete({ _id: favId }).then(() => {
        favModel.find().then(data => {
            res.send(data)
        })
    })
}

const updateFavController = async (req, res) => {
    let favId = req.params.id;
    let favBody = req.body;
    await favModel.findOne({ _id: favId }).then(async fav => {
        fav.title = favBody.title,
            fav.description = favBody.description,
            fav.toUSD = favBody.toUSD,
            fav.image_url = favBody.image_url,
            fav.userEmail = favBody.userEmail
        await fav.save()
    })
    await favModel.find().then(data => {
        res.send(data)
    })
}

module.exports = {
    allWatchesConmtroller,
    getFavController,
    creatFavController,
    deleteFavController,
    updateFavController
}