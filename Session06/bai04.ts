interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class $Rectangle implements Geometry {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
console.log("Hình tròn:");
console.log("Diện tích:", circle.calculateArea().toFixed(2));
console.log("Chu vi:", circle.calculatePerimeter().toFixed(2));

const rectangle = new $Rectangle(4, 6);
console.log("\nHình chữ nhật:");
console.log("Diện tích:", rectangle.calculateArea());
console.log("Chu vi:", rectangle.calculatePerimeter());
