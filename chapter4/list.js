function prepend(tail, value) {
    let head = {};
    head.value = value;
    head.rest = tail;
    tail = head;
    return tail;
}

function arrayToList(arr) {
    let list = {};
    for (let i = arr.length - 1; i >= 0; --i)
        list = prepend(list, arr[i]);

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


function nth(list, n) {
    if (!list)
        return undefined;
    if (n == 0)
        return list.value;
    return nth(list.rest, n - 1);
}


let arr = [1, 2, 3];
let list = arrayToList(arr);
console.log(list);
console.log(listToArray(list));

console.log(nth(list, 1));
