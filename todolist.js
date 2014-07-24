var KEY_CODE_ENTER = 13;

// <li class="completed">
// 						<div class="view">
// 							<input class="toggle" type="checkbox" checked>
// 							<label>타이틀</label>
// 							<button class="destroy"></button>
// 						</div>
// 					</li>
var todoList = document.getElementById('todo-list');
var todoInput = document.getElementById('new-todo');

todoInput.addEventListener('keydown', function(e) {
	var keyCode = e.keyCode;
	
	if (keyCode === KEY_CODE_ENTER) {
		var li = document.createElement('li');
		var div = document.createElement('div');
		div.className = 'view';

		var input = document.createElement('input');
		input.className = 'toggle';
		input.type = 'checkbox';

		var label = document.createElement('label');
		label.innerHTML = this.value;

		var button = document.createElement('button');
		button.className = 'destroy';

		div.appendChild(input);
		div.appendChild(label);
		div.appendChild(button);
		li.appendChild(div);
		todoList.appendChild(li);

		todoInput.value = '';
	}
}, false);