function deepEqual(a, b) {
    if (a === b)
        return true;

    if (typeof a == "object" && typeof b == "object") {
        if ((a == null && b != null) || (a != null && b == null))
            return false;

        for (let key in a)
            if (!deepEqual(a[key], b[key]))
                return false;

        for (let key in b)
            if (!deepEqual(a[key], b[key]))
                return false;

        return true;
    } 
    return false;
}

b = {value: 12, buys: ["coal", "kerosene"]};
a = {value: 12, buys: ["coal", "kerosene"]};
console.log(deepEqual(a, b));
