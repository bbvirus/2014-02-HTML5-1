var ENTER_KEYCODE = 13;

var elements = {
	elNewTodo : "",
}

var makeTodo = function(todo) {
	var template = $('#todo-template').html();
	Mustache.parse(template); 
	var rendered = Mustache.render(template, {text: todo});
/*
	var li = document.createElement("li");
		
	var div = document.createElement("div");
	div.className = "view";
	
	var input = document.createElement("input");
	input.className = "toggle";
	input.setAttribute("type", "checkbox");
	
	var label = document.createElement("label");
	label.innerText = text;
	
	var button = document.createElement("button");
	button.className = "destroy";
	
	div.appendChild(input);
	div.appendChild(label);
	div.appendChild(button);
	
	li.appendChild(div);
		
*/
	return rendered;
}

var addNewTodo = function(e){
	//li추가
	if(e.keyCode === ENTER_KEYCODE) {
		
		var todo = makeTodo(elements.elNewTodo.value);
		//document.getElementById("todo-list").innerHTML(todo);
		$('#todo-list').append(todo);
		elements.elNewTodo.value = "";
	}
}

var init = function() {
	//keydown 이벤트에  li을 추가하는 함수 등록
	elements.elNewTodo = document.getElementById("new-todo");
	elements.elNewTodo.addEventListener("keydown", addNewTodo, false);
}

//window.addEventListener("load",init);
document.addEventListener("DOMContentLoaded",init);