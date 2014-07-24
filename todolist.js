// 상수
var KEY_CODE_ENTER = 13;

var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('new-todo');

function getTodo(inputValue) {

	var todoTemplate = _.template(
		'<li>' +
			'<div class="view">' +
				'<input class="toggle" type="checkbox"></input>' +
				'<label><%- value %></label>' +
				'<button class="destroy"></button>' +
			'</div>' +
		'</li>'
		);
	
	var li = todoTemplate({value: inputValue});

	return li;
}

function insertTODO(e) {
	var keyCode = e.keyCode;
	
	if (keyCode === KEY_CODE_ENTER) {
		var li = getTodo(this.value);

		todoList.insertAdjacentHTML('beforeend', li);
		this.value = '';
	}
}

todoInput.addEventListener('keydown', insertTODO, false);