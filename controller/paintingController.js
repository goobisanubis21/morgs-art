const { default: axios } = require("axios");
const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Painting
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
    }

}