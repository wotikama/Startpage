let html_addButton, html_todoList, html_input, html_inputContainer, html_deleteButton, todoStorage = [];

function hideInput() {
	html_input.value = "";
	html_inputContainer.style.display = "none";
	html_addButton.style.display = "block";
}

function showInput() {
	html_inputContainer.style.display = "block";
	html_addButton.style.display = "none";
	html_input.focus();
}

function addTodo(text) {
	addTodoToList(text);
	addTodoToStorage(text);
}

function addTodoToList(text){
	// create li
	let item = document.createElement("li");
	item.classList.add("c-todo__item");
	item.dataset.todo = text;
	// create span
	let span = document.createElement("span");
	span.classList.add("c-todo__button", "c-todo__delete");
	span.addEventListener("click", () => {
		removeTodo(text);
	});
	// add text to span
	span.appendChild(document.createTextNode("X"));
	// add text to li
	item.appendChild(document.createTextNode(text));
	// add span to li
	item.appendChild(span);

	// add li to ul
	html_todoList.appendChild(item);
}

function addTodoToStorage(text){
	// update local storage
	getTodosFromLocalStorage();
	todoStorage.push(text)
	localStorage.setItem("todos", JSON.stringify(todoStorage));
}

function removeTodo(text) {
	for(let i in html_todoList.children){
		console.log(html_todoList.children[i]);
		if(html_todoList.children[i].dataset.todo == text){
			html_todoList.removeChild(html_todoList.children[i]);
			todoStorage.splice(i, 1);
			localStorage.setItem('todos', JSON.stringify(todoStorage));
			break;
		}
	}
}

function getDOMElements() {
	html_addButton = document.querySelector(".js-todo-add");
	html_todoList = document.querySelector(".js-todo-list");
	html_input = document.querySelector(".js-todo-input");
	html_inputContainer = document.querySelector(".js-todo-input-container")

	// set input value to nothing
	html_input.value = "";

	html_addButton.addEventListener("click", () => {
		showInput();
	});

	html_input.addEventListener("keyup", (e) => {
		if (e.key == "Enter") {
			if (e.target.value.length != 0) {
				addTodo(e.target.value);
				hideInput();
			}
		}
	});
}

function getTodosFromLocalStorage() {
	todoStorage = JSON.parse(localStorage.getItem("todos")) || [];
}

document.addEventListener("DOMContentLoaded", () => {
	getDOMElements();
	getTodosFromLocalStorage();
	console.log(todoStorage);
	for(let item of todoStorage){
		addTodoToList(item);
	}
});
