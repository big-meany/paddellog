/* GET 'about us' page */
module.exports.homelist = function(req, res) {
    res.render('index', {title: 'Home'});
};

/* Get Welcome page */
module.exports.welcome = function(req,res) {
    res.render('welcome', {title: 'PaddleLog :: Welcome'})
}