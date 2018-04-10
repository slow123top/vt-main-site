

for (var i = 0; i < 6; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}


for (var i = 0; i < 6; i++) {
    setTimeout((function (j) {
        return function () {
            console.log(j)
        }
    })(i), i * 10000)
}

for (var i = 0; i < 6; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        }, i * 1000)
    })(i)
}

for (let i = 0; i < 6; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000)
}