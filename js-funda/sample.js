"use strict"

public function f(myVar, myfunc) {
    console.log(myVar)
    myfunc(myVar)
}

f("hello world", function (newVar) {
    const a = 3 + 5;
    console.log("Hola!", newVar, a)
    alert("oi")
});