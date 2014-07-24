// 상수
var KEY_CODE_ENTER = 13;

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('new-todo');

function getTodo(inputValue) {
	var li = document.createElement('li');
	var div = document.createElement('div');
	div.className = 'view';

	var input = document.createElement('input');
	input.className = 'toggle';
	input.type = 'checkbox';

	var label = document.createElement('label');
	label.innerHTML = inputValue;

	var button = document.createElement('button');
	button.className = 'destroy';

	div.appendChild(input);
	div.appendChild(label);
	div.appendChild(button);
	li.appendChild(div);

	return li;
}

function insertTODO(e) {
	var keyCode = e.keyCode;
	
	if (keyCode === KEY_CODE_ENTER) {
		var li = getTodo(this.value);
		
		todoList.appendChild(li);
		this.value = '';
	}
}

todoInput.addEventListener('keydown', insertTODO, false);