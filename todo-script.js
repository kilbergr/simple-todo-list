var form = document.querySelector("form");
var addNew = document.getElementsByTagName("ul")
var input = document.getElementById("list"); 
var uls = document.getElementById("items")

form.addEventListener("submit", function(event){
	event.preventDefault();
  	var newItem = document.createElement("LI");
  	var text = document.createTextNode(input.value);
  	newItem.appendChild(text);
    addNew[0].appendChild(newItem);
    document.getElementById("list").value='';
});

form.addEventListener("keydown", function(event){
  	if (13 == event.keycode) {
	   event.preventDefault();
	  	var newItem = document.createElement("LI");
	  	var text = document.createTextNode(input.value);
	  	newItem.appendChild(text);  	
	    addNew[0].appendChild(newItem)
	    document.getElementById("list").value='';
	}
});

uls.addEventListener("click", function(event){
	if(event.srcElement.className){
		event.srcElement.className="";
	}
	else {
		event.srcElement.className = "completed";
	}
})