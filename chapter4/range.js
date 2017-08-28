function range(start, end, step) {
    if (step == undefined)
        step = 1;

    arr = []
    for (let i = start; i <= end; i += step)
        arr.push(i);
    return arr;
}


function sum(arr) {
    let sum_ = 0;
    for (let i = 0; i < arr.length; ++i)
        sum_ += arr[i];
    return sum_;
}


console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(10, 2, -1));
