var a = document.getElementById("heading");
a.innerHTML = "Hello Everyone!"

// console.log("TTTTT")

function test(){
    console.log("Hello")
}

// test();

var firstValue = document.getElementById("one");
var secondValue = document.getElementById("two");
var output = document.getElementById("output");

function add(event){
    event.preventDefault()
    var one = firstValue.value;
    var two = secondValue.value;
    var result = parseInt(one) + parseInt(two);
    output.innerHTML = result;

}
