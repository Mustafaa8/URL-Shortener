const router = require('express').Router();
const linkConn = require('../controllers/linkConn')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' , shortLink:``});
});
router.post('/',linkConn.shortLink)
router.get('/:id',linkConn.getLink)

module.exports = router;
