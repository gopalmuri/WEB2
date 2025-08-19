class Engine {
    start() {
        console.log(`<p>Engine started</p>`)

    }
}
class Car {
    constructor(Engine) {
        this.Engine = Engine;

    }
    drive() {

        this.Engine.start();
        console.log("car is moving")
    }
}
const car = new Car(new Engine)
car.drive()



class Book {
    constructor(title) {
        this.title = title;
    }
}
class Library {
    constructor() {
        this.books=[];}
        addBook(book){
            this.books.push(book);
        }    
}
const l=new Library();
l.addBook(new Book("javascript basics"))
l.addBook(new Book("oops books concept"))
console.log(l.books.map(b=>b.title).join("\n"))
