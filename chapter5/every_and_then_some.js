function every(arr, f) {
    for (let i = 0; i < arr.length; ++i)
        if (!f(arr[i]))
            return false;
    return true;
}


function some(arr, f) {
    for (let i = 0; i < arr.length; ++i)
        if (f(arr[i]))
            return true;
    return false;
}


a = [1, 3, 7]
console.log(every(a, function(element) {
    return element % 2 != 0;
}));

b = [1, 3, 7, 2]
console.log(some(b, function(element) {
    return element % 2 == 0;
}));
