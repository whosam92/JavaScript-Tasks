const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

let allTodos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    allTodos.push(todoText);
    updateTodoList();
    todoInput.value = ""; // Clear the input field
  }
}

function updateTodoList() {
  todoListUL.innerHTML = ""; // Clear the list before updating
  allTodos.forEach((todo, todoIndex) => {
    const todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem); // Append each created item to the list
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;

  // Create list item
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo");

  // Create checkbox input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = todoId;

  // Create custom checkbox
  const customCheckbox = document.createElement("label");
  customCheckbox.classList.add("custom-checkbox");
  customCheckbox.setAttribute("for", todoId);
  customCheckbox.innerHTML = `
    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </svg>
  `;

  // Create todo text label
  const textLabel = document.createElement("label");
  textLabel.setAttribute("for", todoId);
  textLabel.classList.add("todo-text");
  textLabel.innerText = todo;

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
    </svg>
  `;
  deleteButton.addEventListener("click", () => {
    deleteTodo(todoIndex);
  });

  // Append elements to list item
  todoLi.append(checkbox, customCheckbox, textLabel, deleteButton);

  return todoLi;
}

function deleteTodo(index) {
  allTodos.splice(index, 1); // Remove the item from the array
  updateTodoList(); // Refresh the list
}

// I need to add local storage method to save data by craeting this function
// function saveTodos
