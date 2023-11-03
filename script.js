const todoList = []; // To Do List에 들어갈 목록을 저장하는 배열

// HTML 요소를 가져오기
const todoInput = document.getElementById("todo-input"); // To Do List 입력 필드
const addTodoButton = document.getElementById("add-todo-button"); // To Do List 추가 버튼
const todoListContainer = document.getElementById("todo-list"); // To Do List 목록을 표시할 컨테이너

// To Do List를 추가하는 이벤트 리스너
addTodoButton.addEventListener("click", addTodo);     
// "추가" 버튼을 클릭하면 브라우저는 이 버튼에 연결된 "click" 이벤트를 감지
// 이벤트가 감지되면 지정된 함수인 addTodo를 호출
// addTodo 함수는 사용자가 입력한 할 일을 배열 todoList에 추가하고, 입력 필드를 지우고, 할 일 목록을 다시 렌더링하는 역할

// 새로운 To Do List를 추가하는 함수
function addTodo() {
    const todoText = todoInput.value.trim(); // 입력된 To Do List 내용을 얻음
    if (todoText) {
        todoList.push(todoText); // 배열에 새로운 To Do List를 추가
        todoInput.value = ""; // 입력 필드를 비움
        renderTodoList(); // To Do List 목록을 다시 그림
    }
}

// To Do List를 삭제하는 함수
function deleteTodo(index) {
    todoList.splice(index, 1); // todoList에서 index 위치에 있는 요소를 1개 삭제
    renderTodoList(); // To Do List 목록을 다시 그림
}

// To Do List 목록을 HTML로 렌더링하는 함수
function renderTodoList() {
    todoListContainer.innerHTML = ""; // To Do List 목록 컨테이너 내용을 초기화
   
    // todoList 배열을 반복하면서 각 To-Do 항목을 처리
    for (let i = 0; i < todoList.length; i++) {
        const listItem = document.createElement("li"); // 새로운 목록 항목 <li> 생성 
        // 각 항목은 To Do List 내용을 표시하는 역할을 한다

        listItem.textContent = todoList[i]; // listItem 요소에 현재 To-Do 항목의 내용을 텍스트로 추가
        // 각 항목에 To-Do 내용이 표시

        const deleteButton = document.createElement("button"); // 삭제 버튼 생성
        deleteButton.textContent = "삭제"; // 버튼에 "삭제" 텍스트 추가
        deleteButton.addEventListener("click", () => deleteTodo(i)); // 클릭 이벤트 리스너 추가

        listItem.appendChild(deleteButton); // 목록 항목에 삭제 버튼 추가
        todoListContainer.appendChild(listItem); // 목록 컨테이너에 목록 항목 추가
    }
}

renderTodoList(); // 초기 할 일 목록을 페이지에 렌더링
