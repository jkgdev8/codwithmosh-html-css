function circle1(radius) {
    return {
        radius: radius,
        draw() {
            console.log('this is a drawing');
        }
    }

}
const circle = circle1(1);
console.log(circle);