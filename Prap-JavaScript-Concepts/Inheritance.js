/*
    This is an example of the single level inheritance in javascript.
    super(); Is the special concept of javascript in which you can access from the main class.


    Super() -> To set the name, type property to the parent.
*/

class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I\'m a ${this.type}`);
    }
}
class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WEEEEEEEEEEEE I\'m a ${this.type}`);
    }
}
class Deepak extends Wizard{
    constructor(name, type){
        super(name, type);  // this give us access to the previous class objects;
    }
    hello(){
        console.log(`This is ${this.name}`);
    }
}

const wizard1 = new Wizard('Deepak', 'Coder');
const wizard2 = new Wizard('Aayush', 'Student');
const wizard = new Deepak('Ram', 'speaker');
const play = new Player('Deepak', 'Full-Stack Developer');


play.introduce();
wizard.hello(); // From here you can access the main class through extended class.
