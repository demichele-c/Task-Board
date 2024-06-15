// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
//var myModal = new bootstrap.Modal(document.getElementById('myModal'));
var modal = document.getElementById("myModal");
// Show the modal
// myModal.show();

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;
    
    // You can add further validation or processing of the input values here
    
    // For demonstration purposes, let's log the input values to the console
    console.log("Task Name: " + taskName);
    console.log("Task Description: " + taskDescription);
    console.log("Due Date: " + dueDate);
    
    // You can add code here to save the task data to localStorage or perform any other actions
    
    // Close the modal after adding the task
    //var modal = document.getElementById("myModal");
    // modal.style.display = "none";
    $('#myModal').modal('hide')

}
    
// Event listener for the "Add Task" button
const addTaskButton = document.querySelector('#formSubmit');
addTaskButton.addEventListener('click', handleAddTask);
    
const closeBtn = document.querySelector('.close')
    
closeBtn.addEventListener('click', function() {
    //myModal.modal('hide')
   $('#myModal').modal('hide')
});


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
