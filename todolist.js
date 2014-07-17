var ADD_NEW_TODO = (function() {
    this.CONST_NUM = {
        ENTER_KEYCODE : 13
    };
    var createNewTodoElem = function(sTodo) {
        var elLi = document.createElement("li");

        var elDiv = document.createElement("div");
        elDiv.className = "view";

        var elInput = document.createElement("input");
        elInput.className = "toggle";
        elInput.setAttribute("type", "checkbox");

        var elLabel = document.createElement("label");
        elLabel.innerText = sTodo;

        var elButton = document.createElement("button");
        elButton.className = "destroy";

        elDiv.appendChild(elInput);
        elDiv.appendChild(elLabel);
        elDiv.appendChild(elButton);

        elLi.appendChild(elDiv);

        return elLi;
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("new-todo").addEventListener("keydown", function (e) {
            if (e.keyCode === this.CONST_NUM.ENTER_KEYCODE) {
                var sTodo = e.target.value;
                var elLi = createNewTodoElem(sTodo);

                document.getElementById("todo-list").appendChild(elLi);

                e.target.value = "";
            }
        }.bind(this));
    }.bind(this));
})();