var KEYCODE = {
	ENTER : 13
}


var makeTodo = function(todo) {
	var li = document.createElement("li");
	var div = document.createElement("div");
	div.className = "view";
	var input = document.createElement("input");
	input.className = "toggle";
	input.setAttribute("type", "checkbox");
	var label = document.createElement("label");
	label.innerText = todo;
	document.getElementById("new-todo").value = "";
	var button = document.createElement("button");
	button.className = "destroy";

	div.appendChild(input);
	div.appendChild(label);
	div.appendChild(button);

	li.appendChild(div);
	return li;
};

var makeTodoT = function(todo) {
	var source   = document.getElementById("li-template").innerHTML;
	var template = Handlebars.compile(source);
	var context  = {labelText: todo, liType: "{}"};	
	var html     = template(context);
	return html;
}

var addTodo = function(e) {
if (e.keyCode == KEYCODE.ENTER) {
	var todo = makeTodoT(document.getElementById("new-todo").value);
	//document.getElementById("todo-list").appendChild(todo);
	document.getElementById("todo-list").insertAdjacentHTML("afterbegin",todo);
	document.getElementById("new-todo").value = "";	
	}
};


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("new-todo").addEventListener("keydown", addTodo);
});