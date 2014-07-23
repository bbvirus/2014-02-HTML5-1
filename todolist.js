// ADD_NEW_TODO 라는 변수명은 이 코드의 제목같은 용도로 사용했습니다. 특별한 의도가 담겨있진 않습니다..
var ADD_NEW_TODO = (function() {
    // 이 변수는 아래 함수에서 접근할 때 this가 아니면 접근이 안되는줄 알고 썼는데 확인해보니 제가 착각했네요.
    // private변수로 쓰는게 더 맞는 것 같아서 수정했습니다.
    var CONST_NUM = {
        ENTER_KEYCODE : 13
    };

    var sTemplate =
        "<li>" +
            "<div class='view'>" +
                "<input class='toggle' type='checkbox'>" +
                "<label>{{todo}}</label>" +
                "<button class='destroy'></button>" +
            "</div>" +
        "</li>";

    var createNewTodoDomString = function(sTodo) {
        return Mustache.render(sTemplate, {todo : sTodo});
    };

    var addNewTodoDom = function(event) {
        if (event.keyCode === CONST_NUM.ENTER_KEYCODE) {
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