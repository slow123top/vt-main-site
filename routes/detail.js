var express = require('express');
var router = express.Router();
let http = require('http')
const qs = require('querystring')
/* GET users listing. */
router.post('/', function (req, res, next) {
    let detail = req.body.detail
    let mainType = detail.mainType
    let subType = detail.subType
    let options = {
        host: detail.address.replace('http://', ''),
        port: 3000,
        path: '/detail',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        method: 'POST',
    };
    let requ = http.request(options, resp => {
        resp.on('data', function (chunk) {
            res.send(JSON.parse(chunk));
        });
    })
    requ.write(qs.stringify({
        mainType: mainType,
        subType: subType
    }))
    requ.end()
});

module.exports = router;
