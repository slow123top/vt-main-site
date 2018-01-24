var express = require('express');
var router = express.Router();
let http = require('http')

/* GET users listing. */
router.post('/', function (req, res, next) {
    let site = req.body.site
    let options = {
        host: site,
        port: 3000,
        path: '/startSite',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        method: 'POST',
    };
    let requ = http.request(options, resp => {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
            console.log(JSON.parse(chunk))
        });
    })
    requ.end()
});

module.exports = router;
