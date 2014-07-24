var ENTER_KEYCODE = 13;

var elements = {
	elNewTodo : ""
}

var utility = {
	transitionEnd : ""
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
		$("#todo-list li:last-child").css("opacity", 1);
		//var lastAppendedTodo = appendedTodo[0].lastElementChild;
		//lastAppendedTodo.style.opacity = 1;
		$("#todo-list li:last-child .toggle").on("click", completedTodo);
		//var toggle = lastAppendedTodo.querySelector(".toggle");
		//toggle.addEventListener("click", completedTodo, false);
		$("#todo-list li:last-child .destroy").on("click", destroyTodo);
		//var button = lastAppendedTodo.querySelector(".destroy");
		//button.addEventListener("click", destroyTodo, false);
	}
}

var completedTodo = function(e) {
	var li = $(this).parent().parent();

	if($(this).prop("checked")) {
		li.addClass("completed");
	} else {
		li.removeClass("completed");
	}
}

var destroyTodo = function(e) {
	var li = $(this).parent().parent();
	var ul = li.parent();
	li.css("opacity", 0);
	//li.style.opacity = 0;
	$(this).parent().parent().on(utility.transitionEnd, function() { 
		li.empty();
	});
	// li.addEventListener(utility.transitionEnd, function() { 
	// 	ul.removeChild(li);
	// }, false);
}

var featureDetector = function() {
		// 해당브라우져에서 동작가능한 transitionEnd 타입을 찾아서 해당 타입을 result로 반환 해준다.
		var result;
		var elForCheck = document.querySelector("body");
		
		var status = {
			"webkitTransitionEnd" : typeof elForCheck.style.webkitTransform,
			"mozTransitionEnd" : typeof elForCheck.style.MozTransform,
			"OTransitionEnd" : typeof elForCheck.style.OTransform,
			"msTransitionEnd" : typeof elForCheck.style.msTransform,
			"transitionEnd" : typeof elForCheck.style.transform
		}

		for ( var key in status) {
			if (status[key] !== "undefined") {
				result = key;
			}
		}
		
		return result;
	}

var init = function() {
	//keydown 이벤트에  li을 추가하는 함수 등록
	//elements.elNewTodo = $("#new-todo");

	elements.elNewTodo = $("#new-todo")[0];
	//document.getElementById("new-todo");
	//elements.elNewTodo.addEventListener("keydown", addNewTodo, false);
	$("#new-todo").on("keydown", addNewTodo);
	
	utility.transitionEnd = featureDetector();
}

//window.addEventListener("load",init);
document.addEventListener("DOMContentLoaded",init);