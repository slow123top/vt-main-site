var express = require('express');
var router = express.Router();
const multer = require('multer')
const fs = require('fs')
const update = require('../../util/mongodb/update')
/* GET users listing. */
let upload = multer({
    dest: './upload'
});
router.post('/', upload.array('file'), function (req, res, next) {

    let username = req.query.username;
    let fileArr = req.files;
/*把文件上传到文件服务器*/
    fileArr.forEach(item => {
        new Promise((resolve, reject) => {
            fs.readFile(`./upload/${item.filename}`, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        }).then((param) => {
            return new Promise((resolve,reject)=>{
                fs.writeFile(`./public/images/${item.originalname}`, param, err => {
                    if (err) {
                        reject(err)
                    } else {
                        fs.unlinkSync(`./upload/${item.filename}`)
                        resolve()
                    }
                })
            })
        }).then(()=>{
            update({username:username},{avataraddr:`http://localhost:8000/images/${item.originalname}`}).then(()=>{
                res.json({
                    status: 'SUCCESS',
                    // avatarAddr
                    message: '头像修改成功',
                })
            }).catch((e)=>{
                console.log(e)
            })
        }).catch((e) => {
            console.log(e)
        })

    })
    /*把文件地址保存到数据库*/



});

module.exports = router;
