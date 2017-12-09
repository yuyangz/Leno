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
    //var len = splitlist.length;
    ele.innerHTML = "item " + index;
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

//Changes the heading based on the parameter index
var headCallback = function(ind) {
    var head = document.getElementById("h");
    head.innerHTML = "item " + ind;
};

var splitlist = document.getElementsByTagName("LI");

//Only thing stopping this from working is the index mouseover knows(?)
list.addEventListener("mouseover", headCallback(index));

//mouseover
//mouseout
