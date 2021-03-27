let todoInput = document.getElementById('todo_input');
let todoButton = document.getElementById('todo_button');
let listContainer = document.getElementById('todo_container');
let todoList = document.getElementById('todo_list');

todoButton.addEventListener('click', addToDo)

function addToDo(){

	let text = todoInput.value;
	if(text === ""){
		alert("Please enter a text");
	}
	else{
		var todoL = document.createElement('li');
		todoL.innerText = todoInput.value;
		todoList.appendChild(todoL);
		todoInput.value = "";

		todoL.addEventListener('click', function(){
			todoL.classList.toggle('checked');
		})

		todoL.addEventListener('dblclick', function(){
			todoL.remove();
		})
	}
}

	




