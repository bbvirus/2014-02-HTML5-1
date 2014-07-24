// 상수
var KEY_CODE_ENTER = 13;

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('new-todo');

function getTodo(inputValue) {
	var todoTemplate = _.template(document.getElementById('todo').innerHTML);
	
	var todo = todoTemplate({value: inputValue});

	return todo;
}

function insertTODO(e) {
	var keyCode = e.keyCode;
	
	if (keyCode === KEY_CODE_ENTER) {
		var todo = getTodo(this.value);

		todoList.insertAdjacentHTML('beforeend', todo);
		this.value = '';
	}
}

todoInput.addEventListener('keydown', insertTODO, false);