/* GET 'about us' page */
module.exports.homelist = function(req, res) {
    res.render('index', {title: 'Home'});
};