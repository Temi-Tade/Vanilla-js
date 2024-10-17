var a = 1;
console.log(this.a);

// function sayHello(){
//     var message = "Hello";
//     console.log(this.message);
// }

var person = {
    message: "Hello",
    sayHello: () => {
        console.log(this.message);
    }
}

person.sayHello();