/*
	LenO
	Irene Lam and Yuyang Zhang
	SoftDev1 pd7
	K15 -- DOMinating JS
	2017-12-08
*/
//List in intro.html
var list = document.getElementById("thelist");

//Index to continue the list
var index = 8

//Adds an element to the list
var addList = function(){
    var ele = document.createElement("LI"); 
    ele.addEventListener("mouseover", headCallback);
    ele.addEventListener("click",removeCallback);
    //var len = splitlist.length;
    ele.innerHTML = "item " + (index);
    list.appendChild(ele);
    index++;
};

//Button for adding to the list
var addElementCallback = function(e) {
    console.log("\n\nNow adding an  element to the list");
    addList();
    console.log("Newest element added: item " + (index-1))
};
var addElement = document.getElementById("addElement");
addElement.addEventListener("click", addElementCallback);

//Changes the heading
var headCallback = function(e) {
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};

//Reverts heading back to "Hello World!"
var oldCallback = function(e) {
    var head = document.getElementById("h");
    head.innerHTML = "Hello World!";
}

//Removes a list element
var removeCallback = function(e) {
    this.remove();
}

var splitList = document.getElementsByTagName("LI");

//Obtains individual elements from list
for (i = 0;i < splitList.length; i++){
    //Modifies heading when the mouse is over the element of the list
    splitList[i].addEventListener("mouseover", headCallback);
    //Removes the element of the list upon clicking
    splitList[i].addEventListener("click",removeCallback);
}
//Reverts heading when the mouse no longer hovers over the list
list.addEventListener("mouseout", oldCallback);

//=============Fibonacci================
var fibList = document.getElementById("fibList");

var fib = function(n) {
    var list = document.getElementsByClassName("fibonacci");
    console.log(list);
    if (n == 0)
        return 0;
    if(n <= 2){
        return 1;
    }
    else{
    //    console.log(list[indexFib-1].slice(10))
        //return list[indexFib-1].slice(10) + list[indexFib-2].slice(10)
        return fib(n-1) + fib(n-2);
    }
}

var indexFib = 1;

var addFibList = function(){
 var ele = document.createElement("LI");
    ele.innerHTML = "Fib of " + indexFib + ": "+ fib(indexFib);
    console.log(fib(indexFib));
    fibList.appendChild(ele);
    indexFib++;
}

var fibonacciCallback = function(e){
   console.log("\n\nNow adding an element to the fib list");
   addFibList();

}
var fibonacci = document.getElementById("fibonacci");
fibonacci.addEventListener("click", fibonacciCallback);

//==============Triangular Numbers==================
var triList = document.getElementById("triList");

var tri = function(n) {
    return (Math.pow(n,2)+n)/2;
}

var indexTri = 1;

var addTriList = function(){
 var ele = document.createElement("LI");
    ele.innerHTML = "Triangular number of " + indexTri + ": "+ tri(indexTri);
    console.log(tri(indexTri));
    triList.appendChild(ele);
    indexTri++;
}

var triangleCallback = function(e){
   console.log("\n\nNow adding an element to the list of triangular numbers");
   addTriList();

}
var triangular = document.getElementById("triangle");
triangular.addEventListener("click", triangleCallback);
