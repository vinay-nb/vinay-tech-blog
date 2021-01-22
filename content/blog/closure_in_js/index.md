---
title: Closure in JavaScript!
date: "2020-09-08T23:46:37.121Z"
description: "What closure is?"
---

In this blog will discuss about what exactly the closure, lexical scoping, working of closure, why it is important to know?.

Let’s begin.<br/>
**What is Closure ?** <br/>
_A closure is the combination of a function and the lexical environment within which that function was declared_. In simpler words it is function within the function. So basically inner function will have the access to the variables of the outer function. But the reverse of this is not true(You cannot access variables of inner function using outer function). You might wander this seems like about the scope of variables in other programming languages, Yes you are thinking it right my dear friend. But in JavaScript this type of scoping is called Lexical Scoping.
Consider the below example

```
function init() {
var name = 'Vinay'; // name is a local variable created by init
function displayName() { // displayName() is the inner function, a closure
alert(name); // use variable declared in the parent function
}
displayName();//function call to inner function.
}
init();//function call to outer function.
```

In the above example init() function has name as local variable which is assigned the value ‘Mozilla’. This variable acts as local variable to init() function. And this function also have displayName() as function call, which calls the inner function. But function displayName() doesn’t have any local variables. Because of the inner function will have access to the local variable of the outer function, above examples alerts the output as ‘Vinay’. The above code is an example of lexical scoping.

**Working of Closure**<br/>
After knowing what is Lexical Scoping, will dive little deeper into the how closure works. Now let us consider the following example.

```
1  function makeAdder(x) {
2   return function(y) {
3     return x + y;
4   };
5  }
6
7  var add5 = makeAdder(5);
8  var add10 = makeAdder(10);
9
10 console.log(add5(2));
11 console.log(add10(2));
```

Before scrolling down to see the answer, think what this program might log on to the console. I hope you are thinking ……………………………………!!.

So the answer to the first log is 7(line 10).<br/>
Let’s see how the execution will happen in above code. In the line 7 makeAdder(5) is going to create an instance of the function. In the makeAdder function body it doesn’t have anything to print, it’s just returns another function, as makeAdder(5) has created an instance (it means we have reference to the inner function), it will call that instance with passing another parameter(line 10). So basically in the global scope makeAdder(5) is called, so first we have makeAdder(5) function on top of it will have function(y) line 2 (makeAdder cannot exit because it is waiting for reference to complete it’s execution) . Once the function(y) executes it will removed from the top, (you can guess the data structure used here) now the pointer will move to outer function . In this makeAdder(5) reference remains until the inner function completes it’s execution, by this we are able to access the outer function’s local variable. So the first log(line 10) will logs the answer as 7 in the above code. I hope now you have understood the working closure, try to figure out the answer for second log in the above code(line 11).

**Where Closures are used?**<br/>
If you want to know how many times particular button has clicked by user in a web page.

```
<button onclick="updateClickCount()">click me</button>
```

Now there could be many approaches like:<br/>

1. You could use a global variable, and a function to increase the counter:

```
var counter = 0;
function updateClickCount() {
    ++counter;
    // do something with counter
}
```

But, the pitfall is that any script on the page can change the counter, without calling the function `updateClickCount().`

2. Now, You might be thinking of declaring the variable inside the function:<br/>

```
function updateClickCount() {
    var counter = 0;
    ++counter;
    // do something with counter
}
```

But,Hey! Every time `updateClickCount()` function is called, the counter is set to 1 again.

3. Thinking about Nested functions?<br/>
   Nested functions have access to the scope “above” them.
   In this example, the inner function updateClickCount() has access to the counter variable in the parent function `countWrapper()`

```
function countWrapper() {
    var counter = 0;
    function updateClickCount() {
    ++counter;
    // do something with counter
    }
    updateClickCount();
    return counter;
}
```

This could have solved the counter dilemma, if you could reach the updateClickCount() function from the outside and you also need to find a way to execute `counter = 0` only once not everytime.

4. Closure to the rescue! (self-invoking function):<br/>

```
var updateClickCount=(function(){
    var counter=0;
    return function(){
     ++counter;
     // do something with counter
    }
})();
```

The self-invoking function only runs once. It sets the `counter`to zero (0), and returns a function expression. This way `updateClickCount` becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

_Happy Coding !!!_

Resources <br/>
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)<br/>
[Hitesh Choudhary](https://www.youtube.com/user/hiteshitube)<br/>
[Stackoverflow](https://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript)
