//할 일을 추가하는 메서드
function addTodo(e) {
	var ENTER_KEYCODE = 13;
	
	if(e.keyCode === ENTER_KEYCODE) {
		
		// 할 일 내용이 없으면 li를 만들지 않게 한다.
		var todoContents = e.target.value;
		if(todoContents.length === 0) {return;}

		// Mustache를 이용해 템플릿을 생성하고 todoElement에 저장해둔다.
		var data = {contents: todoContents};
		var template = document.getElementById("todoTemplate").innerHTML;
		var todoElement = Mustache.to_html(template, data);

		// todoElement를 todo-list 하위 엘리먼트로 넣어주고 new-todo의 입력칸을 깨끗하게 비워준다.
		document.getElementById("todo-list").insertAdjacentHTML("afterbegin", todoElement);
		document.getElementById("new-todo").value = "";
	}
}

//DOMContentLoaded 시점에 new-todo 요소에 keydown 이벤트 리스너를 달아둔다.
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("new-todo").addEventListener("keydown", addTodo);
});