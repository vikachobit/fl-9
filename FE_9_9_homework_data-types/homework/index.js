function findType(param) {
    return typeof param
}

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

function map(arr, callback) {
    let modifyArr = [];
    forEach(arr, (item) => {
        modifyArr.push(callback(item))
    });
    console.log(modifyArr);
    return modifyArr;

}

function filter(arr, callback) {
    let filteredArray = [];
    forEach(arr, (item) => {
        if (callback(item)) {
            filteredArray.push(item)
        }
    });
    console.log(filteredArray);
    return filteredArray;
}

function getAdultAppleLovers(arr) {
    let filteredArray = filter(arr, item => {
        return item.age > 18 && item.favoriteFruit === "apple"
    });
    map(filteredArray, (item) => {
        return item.name
    })
}

let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
    }
];


//call
console.log(findType(null));

forEach([2, 5, 8], function (el) {
    console.log(el)
});

map([2, 5, 8], function (el) {
    return el + 3
});
filter([2, 5, 8], function (el) {
    return el > 3
});

getAdultAppleLovers(data); // returns [‘Stein’]