function Vector(x, y) {
    this.x = x;
    this.y = y;
}


Vector.prototype.plus = function(vec) {
    let ans = new Vector(this.x + vec.x, this.y + vec.y);
    return ans;
}


Vector.prototype.minus = function(vec) {
    let ans = new Vector(this.x - vec.x, this.y - vec.y);
    return ans;
}


Object.defineProperty(Vector.prototype, "length",
                      {get: function() {
                          return Math.sqrt(this.x*this.x + this.y*this.y);}});

let v = new Vector(2, 3);
let v2 = new Vector(4, 5);
console.log(v.plus(v2));
console.log(v.minus(v2));
console.log(v.length);
