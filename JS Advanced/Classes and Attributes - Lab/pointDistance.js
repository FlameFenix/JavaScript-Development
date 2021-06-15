class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let xDistance = Math.abs(b.x - a.x);
        let yDistance = Math.abs(b.y - a.y);

        let distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
        return distance;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
