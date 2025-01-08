// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to add a task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      li.remove(); // Remove the task when the button is clicked
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  };

  // Add task when the button is clicked
  addTaskBtn.addEventListener("click", addTask);

  // Add task when the Enter key is pressed
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

 // Remove the last task when the Delete key is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
      const lastTask = taskList.lastElementChild; // Get the last task in the list
      if (lastTask) {
        lastTask.remove(); // Remove the last task
      }
    }
  });
});
