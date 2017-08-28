function reverseArray(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; --i)
        reversedArray.push(arr[i]);
    return reversedArray;
}


function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length/2; ++i) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
}


let arr = [1, 2, 3, 4];
console.log(reverseArray(arr));
reverseArrayInPlace(arr);
console.log(arr);
