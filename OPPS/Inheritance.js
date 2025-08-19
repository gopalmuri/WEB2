class Animal{
    eat(){
        document.write("<b><i style='color:red; font-size:50px;'>Eating.....</i></b><br>");


    }
}
class Dog extends Animal{
    bark(){
        document.write("Woof!..<br>")

    }
}
const a = new Dog()
a.eat()
a.bark()


class vehicle{
    move(){
        document.write("<b style='font-style:italic;font-weight:bold;font-size:60px;border:3px solid lightgray;padding:2px;margin-top:100px;color:lightgreen;'>vehicle is moving</b><br>")

    }

}
class car extends vehicle{
    honk(){
        document.write("Beep Beep !...<br>")
    }
}

const ca = new car()
ca.honk()
ca.move()



