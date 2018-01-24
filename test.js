let http = require('http')
let options = {
    host:'192.168.11.24',
    port: 8080,
    // path: '/queryBaseStationController',
    path:'/api/baseStation15/file'
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
}

let req = http.request(options, function (resp) {
    console.log('STATUS: ' + resp.statusCode);
    console.log('HEADERS: ' + JSON.stringify(resp.headers));
    resp.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
// req.on('error', function (e) {
//     console.log('problem with request: ' + e.message);
// });
// req.write('结束');
req.end();