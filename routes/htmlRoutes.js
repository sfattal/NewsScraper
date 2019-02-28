var db = require("../models");

module.exports = function(app) {
    var articles = []

    app.get("/", function(req, res) {
        res.render("index", { article: articles });
    });

    app.get("/saved", function(req, res) {
    res.render("saved", { article: articles });
    });
}
