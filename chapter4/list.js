function arrayToList(arr) {
    let list = {}, tail = {};
    for (let i = arr.length - 1; i >= 0; --i) {
        list = {};
        list.value = arr[i];
        list.rest = tail;
        tail = list;
    }
    return list;
}


function listToArray(list) {
    arr = []
    while (list.rest) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}


let arr = [1, 2, 3, 4, 5];
let list = arrayToList(arr);
console.log(list);
console.log(listToArray(list));
