require("./code/load")("code/ancestry.js", "code/chapter/05_higher_order.js");

let ancestry = JSON.parse(ANCESTRY_FILE);
let byCentury = {};

function century(diedYear) {
    return Math.ceil(diedYear/100);
}


for (person in ancestry) {
    if (byCentury[century(ancestry[person].died)] == undefined)
        byCentury[century(ancestry[person].died)] = [ancestry[person].died - ancestry[person].born];
    else
        byCentury[century(ancestry[person].died)].push(ancestry[person].died - ancestry[person].born);
}


for (century in byCentury) {
    console.log("Century: ", century, " Average age: ", average(byCentury[century]));
}
