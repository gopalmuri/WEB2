class shape {
    area() {
        return 0;
    }
}
class circle extends shape {
    constructor(radius) {
        super();this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class rectangle extends shape {
    constructor(w, h) {
        super(); this.w = w; this.h = h;
    }
    area() {
        return this.w * this.h;
    }
}
const shapes = [new circle(3),new rectangle(4,5)];
shapes.forEach(s=>console.log("area",s.area().toFixed(2)))




