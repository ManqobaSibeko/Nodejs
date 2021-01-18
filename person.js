// this is an object
// const person = {
//     name:"manqoba",
//     age :30
// };

// module.exports = person;

class Person {
    constructor(name,age){
        this.name = name;
        this.age = name;
    }

    greeting (){
        console.log(`hello everybody my name is ${this.name} and I am ${this.age}`)
    }

}

module.exports = Person;