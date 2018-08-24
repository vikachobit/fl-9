function findType(param) {
    return typeof param
}

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

function map(arr, callback) {
    let newArr = [];
    forEach(arr, (item) => newArr.push(callback(item)));
    console.log(newArr);
}


//call
console.log(findType(null));

forEach([2, 5, 10], function (el) {
    console.log(el)
});

map([2, 5, 10], function (el) {
    return el + 3
});
