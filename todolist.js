// <li>
// 	<div class="view">
// 		<input class="toggle" type="checkbox">
// 		<label>타이틀</label>
// 		<button class="destroy"></button>
// 	</div>
// </li>

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

var addTodo = function(e) {
var KEY_ENTER = 13;
if (e.keyCode == KEY_ENTER) {
	var todo = makeTodo(document.getElementById("new-todo").value);
	document.getElementById("todo-list").appendChild(todo);
	}
};


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("new-todo").addEventListener("keydown", addTodo);
});