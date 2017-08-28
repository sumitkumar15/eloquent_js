function countChar(s, ch) {
    let count = 0;
    for (let i = 0; i < s.length; ++i)
        if (s.charAt(i) == ch)
            count++;
    return count;
}


function countBs(s) {
    return countChar(s, "B");
}


console.log(countBs("Bhere was I bow?"));
