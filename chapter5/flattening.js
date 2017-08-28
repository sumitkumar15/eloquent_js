arr = [[1, 2, 3], [4, 5, 6]]

arrFlattened = arr.reduce(function(a, b) {
    return a.concat(b);
})

console.log(arrFlattened);
