/* GET 'about us' page */
module.exports.login = function(req, res) {
    res.render('login', {title: 'PaddleLog :: Login'});
};

/* GET 'about us' page */
module.exports.dataview = function(req, res) {
    res.render('dataview', {title: 'PaddleLog :: DataView'});
};

/* GET 'about us' page */
module.exports.dataentry = function(req, res) {
    res.render('dataentry', {title: 'PaddleLog :: DataEntry'});
};