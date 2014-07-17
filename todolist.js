var ADD_NEW_TODO = (function() {
    this.CONST_NUM = {
        ENTER_KEYCODE : 13
    };

    this.sTemplate =
        "<li>" +
            "<div class='view'>" +
                "<input class='toggle' type='checkbox'>" +
                "<label>{{todo}}</label>" +
                "<button class='destroy'></button>" +
            "</div>" +
        "</li>";

    var createNewTodoDomString = function(sTodo) {
        var sDom = Mustache.render(this.sTemplate, {todo : sTodo});
        return sDom;
    };

    var addNewTodoDom = function(event) {
        if (event.keyCode === this.CONST_NUM.ENTER_KEYCODE) {
            var sTodo = event.target.value;
            var sDom = createNewTodoDomString(sTodo);

            document.getElementById("todo-list").insertAdjacentHTML("beforeend", sDom);

            event.target.value = "";
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("new-todo").addEventListener("keydown", function (e) {
            addNewTodoDom(e);
        });
    });
})();