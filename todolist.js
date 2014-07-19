//pull request 전에 git catch upstream 해서 싱크 맞추기

/* 2014/07/20 최종 완료
 * 131077 채종운
 * 템플릿을 활용하여 li 동적으로 생성하기
 * 사용한 라이브러리 : Underscore.js
 */

//ENTER  키를 13으로 매핑
var ENTER = 13; 

//입력받은 값이 ENTER라면 index.html에 저장해두었던 String을 호출, insertAdjacentHTML을 사용하여 집어넣는다.
function addTODO(e){
        if(e.keyCode == ENTER) {
            var todo = makeStringUsingTemplete(document.getElementById("new-todo").value);
            document.getElementById("todo-list").insertAdjacentHTML('afterBegin', todo);   
            document.getElementById("new-todo").value = "";
        }
}

//HTML파일에 있는 문자열을 가져와서 사용한다.
function makeStringUsingTemplete(inputStr) {
    var compiled = _.template(document.getElementById("viewString").innerText);
    return compiled({text: inputStr});
}

/*
 DOMContentLoaded는 전체 문서(HTML, Script)가 다시금 로드된다.
 load는 전체 문서와 리소스(image, style...)전체가 다시 로드된다.
 현재는 script만 다시 로드하면 되는 문제이니 DOMContentLoaded가 적절하다고 생각한다.
 */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("new-todo").addEventListener("keydown", addTODO);
});


                        