var KEYCODE = {
	ENTER : 13
}

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("new-todo").addEventListener("keydown",function(e){
		if(e.keyCode === KEYCODE.ENTER){
			var text = document.getElementById("new-todo").value;
			var todo = makeTODO(text);
			document.getElementById("todo-list").insertAdjacentHTML("afterbegin",todo);
			document.getElementById("new-todo").value = "";
		}
	})
})

function makeTODO(todo){
	var source   = document.getElementById("entry-template").innerHTML;
	var template = Handlebars.compile(source);
	var context  = {title: todo}
	var html     = template(context);
	return html;
}