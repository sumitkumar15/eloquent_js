// Sequence interface could contain
// current() which returns the value at current position
// next() tries to go to the next value and returns true if it succeeds
// next() should be called at least once before calling current. 


function logFive(seq) {
    let i = 0;
    while (i < 5 && seq.next()) {
        console.log(seq.current());
        i += 1;
    }
}


function ArraySeq(array) {
    this.array = array;
    this.pos = -1;
}


ArraySeq.prototype.current = function() {
    return this.array[this.pos];
}


ArraySeq.prototype.next = function() {
    this.pos++;
    if (this.pos < this.array.length)
        return true;
    return false;
}


function RangeSeq(start, stop) {

    let array = [];
    for (let i = start; i <= stop; ++i)
        array.push(i);
    
    ArraySeq.call(this, array);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);


logFive(new ArraySeq([13, 17, 19]));
logFive(new RangeSeq(1, 10));
