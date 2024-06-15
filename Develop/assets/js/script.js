// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
//var myModal = new bootstrap.Modal(document.getElementById('myModal'));
var modal = document.getElementById("myModal");
// Show the modal
// myModal.show();

// Todo: create a function to generate a unique task id
function generateTaskId() {
    // run some validation 
    if(nextId == null) {
        nextId = 1
    } else {
        nextId = nextId + 1
        //nextId++;
    };
    console.log('Next Id: ', nextId);
    console.log('Type: ', typeof nextId);
    // we got this value from localStorage --> we should updated it 
    localStorage.setItem('nextId', nextId);
    // we return the created data
    return nextId;
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
    let newTask = {
        id: generateTaskId(),
        name: taskName,
        description: taskDescription,
        dueDate: dueDate
    }

    console.log("Task: ", newTask)
    
    // For demonstration purposes, let's log the input values to the console
    //console.log("Task Name: " + taskName);
    //console.log("Task Description: " + taskDescription);
    //console.log("Due Date: " + dueDate);
    
    // You can add code here to save the task data to localStorage or perform any other actions
    // check if we HAVE data --> if not Intialze an empty dataset
    if(taskList == null) {
        taskList = []
    } 
    console.log("Saved Data: ", taskList)
    taskList.push(newTask)
    console.log("New Data: ", taskList)
    console.log("type: ", typeof taskList)
    // WE have the NEW data programatically BUT will NEED to save it to Local Storage
    localStorage.setItem("tasks", JSON.stringify(taskList))

    /*
    let jsObj = {
        name: "bob"
    }

    let jsonObj = {
        "name": "bob"
    }
        */
    
    // Close the modal after adding the task
    //var modal = document.getElementById("myModal");
    // modal.style.display = "none";
    
    // RESET the FORM INPUTS
    $('#taskName').val('')
    $('#taskDescription').val('')
    $('#dueDate').val('')
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
