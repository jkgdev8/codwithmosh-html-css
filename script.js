function Circle(radius) {
    this.radius = radius,
        this.Circle = function () {
            console.log('draw');
        }
}

const c = new Circle(1)
console.log(c);
console.log(c.radius);