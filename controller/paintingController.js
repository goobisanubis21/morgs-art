const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Painting
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(json(err)))
    }
}