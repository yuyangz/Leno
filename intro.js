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

//Changes the heading
var headCallback = function(e) {
    var head = document.getElementById("h");
    head.innerHTML = this.innerHTML;
};

//Reverts heading back to "Hello World!"
var oldCallback = function(e) {
    var head = document.getElementById("h");
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


