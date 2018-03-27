const crypto = require('crypto')
exports.getSha1 = function (str) {
    var sha1 = crypto.createHash("sha1");//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
    sha1.update(str);
    var res = sha1.digest("hex");  //加密后的值d
    return res;
}
exports.getEncAse192 = function (str, secret) {
    var cipher = crypto.createCipher("aes192", secret); //设置加密类型 和 要使用的加密密钥
    var enc = cipher.update(str, "utf8", "hex");    //编码方式从utf-8转为hex;
    enc += cipher.final("hex"); //编码方式从转为hex;
    return enc; //返回加密后的字符串
}
exports.getMd5 = (str) => {
    let md5 = crypto.createHash('md5');
    md5.update(str);
    let md5Result = md5.digest('hex');
    return md5Result
}