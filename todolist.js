var ADD_NEW_TODO = (function() {
    this.CONST_NUM = {
        ENTER_KEYCODE : 13
    };

    this.sTemplate = "" +
        "<li>" +
            "<div class='view'>" +
                "<input class='toggle' type='checkbox' checked>" +
                "<label>{{todo}}</label>" +
                "<button class='destroy'></button>" +
            "</div>" +
        "</li>";

    var createNewTodoDomString = function(sTodo) {
        var sLiDom = Mustache.render(this.sTemplate, {todo : sTodo});
        return sLiDom;
    };

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("new-todo").addEventListener("keydown", function (e) {
            if (e.keyCode === this.CONST_NUM.ENTER_KEYCODE) {
                var sTodo = e.target.value;
                var sDom = createNewTodoDomString(sTodo);

                document.getElementById("todo-list").insertAdjacentHTML('beforeend', sDom);

                e.target.value = "";
            }
        }.bind(this));
    }.bind(this));
})();