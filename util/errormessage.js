module.exports = function (username) {
    const token = jwt.sign({
            username: username
        },
        'secret',
        {
            expiresIn: '10s'  //测试时间为10s
        }
    )
    return token
}