let name = 'window';
let object = {
    name: 'sadsa',
    getName: function () {
        let that = this
        return function () {
            return that.name
        }
    }
}

console.log(object.getName()())