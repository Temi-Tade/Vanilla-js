# JS <code>this</code> keyword in object scope

### In JavaScript, understanding the what, how and where of the <code>this</code> keyword can be the difference between writing code that actually works and tearing your hair out while you code.

## The <code>this</code> keyword
In Javascript, <code>this</code> is a keyword (a reserved word), that is, it cannot be used as a variable name.

In JavaScript code, <code>this</code> is used to represent a scope. A scope, simply put, is a block of code that contains a line or lines of code. It can mean the entire code (global scope) or line(s) of code within curly braces <code>{...}</code>

<code>

    var a = 1;

    //varaible "a" can be accessed any where within the global scope

    function sayHello(){
        var message = "Hello";
        console.log(message);
    };

    //the variable "message" is not accessible in the global scope
    //varaible "a" can be accessed any where within the global scope
</code>

### <code>this</code> in action
<code>

    var a = 1;

    console.log(this.a); // output is 1; this refers to the global scope here, the variable "a" is in the global scope.

    function sayHello(){
        var message = "Hello";
        console.log(this.message);
    };

    sayHello(); // undefined
</code>

You might be wondering why the <code>sayHello()</code> function in the snippet above returned <code>undefined</code>, seeing that the <code>this</code> refers to the <code>sayHello()</code> function scope. Before you rush to say it is another of JavaScript's quirks. Let us dive into it.

<code>

    var a = 1;

    console.log(this.a); // output is 1; this refers to the global scope here, the variable "a" is in the global scope.

    function sayHello(){
        var message = "Hello";
        console.log(this.message);
    };

    sayHello(); // undefined
</code>

The <code>sayHello()</code> function is executed in the global scope, meaning that the execution of <code>sayHello()</code> resolves <code>this</code> to the global scope (the <code>window</code> object; more like saying <code>window.message</code>). There is no variable named <code>message</code> in the global scope, so it returns <code>undefined</code> (You can try adding a variable named <code>message</code> to the global scope and see what happens.). A probable solution is shown below: 

<code>

    var person = {
        message: "Hello",
        sayHello: function(){
            console.log(this.message);
        }
    };

    person.sayHello(); // Hello
</code>

Here, the <code>sayHello()</code> function is a property in the <code>person</code> object, executing the function resolves <code>this</code> to the scope of the <code>person</code> object, rather than the <code>window</code> object. <code>message</code> is a variable (an object property) within the the <code>person</code> object, so it returns the value assigned to it.

While cases like the above may not be necessary in real-world scenarios, it is just a basic explantion to how <code>this</code> works under the hood.

Let us examine another example: 

<code>

    const obj = {
        a: 1,
        b: function() {
            return this.a;
        },
        c: () => {
            return this.a;
        }
    };

    // Output 1: 1
    console.log(obj.b());  

    // Output 2: undefined
    console.log(obj.c());  

    const test = obj.b;

    // Output 3: undefined
    console.log(test());    

    const testArrow = obj.c;

    // Output 4: undefined
    console.log(testArrow());
</code>

### Output 1
<code>obj.b()</code> excutes the function and the <code>this</code> resolves to the <code>obj</code> object scope and returns the value of <code>a</code>

### Output 2
Arrow functions resolve <code>this</code> to the global scope even when they are declared within an object. Here, <code>this</code> resolves to the global scope (<code>window</code>), the varaible <code>a</code> does not exist in the global scope, so it returns undefined.

### Output 3
<code>obj.b</code> returns a function from the <code>obj</code> object (it does not execute it; the parentheses in function calls signifies execution), the returned function is assigned to the <code>test</code> varaible and the function is executed in the global scope (<code>window</code>), the varaible <code>a</code> does not exist in the global scope, so it returns undefined.

### Output 4
<code>obj.c</code> returns a function from the <code>obj</code> object (it does not execute it; the parentheses in function calls signifies execution), the returned function is assigned to the <code>testArrow</code> varaible and the function is executed in the global scope (<code>window</code>), arrow functions normally resolve <code>this</code> to the global scope, the varaible <code>a</code> does not exist in the global scope, so it returns undefined.

---
There you go folks. I hope you have understood the basics of how <code>this</code> works in JavaScript. No more using <code>this</code> in arrow functions, right? We should not also have sleepless nights as far as the usage of <code>this</code> is concerned in scopes.