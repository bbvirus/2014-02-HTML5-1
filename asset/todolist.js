var ENTER_KEYCODE = 13;

var elements = {
	elNewTodo : "",
	elCompletedToggle : "",
	elDestroyButton : ""
}

var makeTodo = function(todo) {
	var template = $('#todo-template').html();
	Mustache.parse(template); 
	var rendered = Mustache.render(template, {text: todo});
	
	return rendered;
}

var addNewTodo = function(e){
	//li추가
	if(e.keyCode === ENTER_KEYCODE) {
		
		var todo = makeTodo(elements.elNewTodo.value);
		var appendedTodo = $('#todo-list').append(todo);
		elements.elNewTodo.value = "";
		var lastAppendedTodo = appendedTodo[0].lastElementChild;
		
		lastAppendedTodo.style.opacity = 0;
		var i = 0;
		var key = setInterval(function(){
	 		if(i >= 50) {
			 	clearInterval(key);
		 	} else {
		 		lastAppendedTodo.style.opacity =  0.02*i;	
		 	}
		 	i++;
	 	}, 16)
		
		
		var toggle = lastAppendedTodo.querySelector(".toggle");
		toggle.addEventListener("click", completedTodo, false);
		
		var button = lastAppendedTodo.querySelector(".destroy");
		button.addEventListener("click", destroyTodo, false);
	}
}

var completedTodo = function(e) {
	var input = e.currentTarget;
	var li = input.parentNode.parentNode;
	if(input.checked) {
		li.className = "completed";
	} else {
		li.className = "";
	}

	console.log(li);
}

var destroyTodo = function(e) {
	console.log("hehe");
	var li = e.currentTarget.parentNode.parentNode;
	var ul = li.parentNode;
	
	li.style.opacity = 1;
	var i = 0;
	
	var key = setInterval(function() {
	 	if(i >= 50) {
		 	clearInterval(key);
		 	ul.removeChild(li);
	 	} else {
	 		li.style.opacity = 1 - 0.02*i;	
	 	}
	 	i++;
	}, 16)
	
	
}

var init = function() {
	//keydown 이벤트에  li을 추가하는 함수 등록
	elements.elNewTodo = document.getElementById("new-todo");
	elements.elNewTodo.addEventListener("keydown", addNewTodo, false);
}

//window.addEventListener("load",init);
document.addEventListener("DOMContentLoaded",init);