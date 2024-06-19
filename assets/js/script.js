// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Function to generate a unique task id
function generateTaskId() {
    if (nextId === null || isNaN(nextId)) {
        nextId = 1;
    } else {
        nextId++;
    }

    localStorage.setItem('nextId', nextId);

    return nextId;
}
// function to create task card.
function createTaskCard(task) {
    const taskCard = $('<div>').attr('id', 'task-card-div').addClass('task-card');

  
    taskCard.data('taskId', task.id);

    const taskNameElement = $('<h3>').text(`Project Name: ${task.name}`);
    const taskDescriptionElement = $('<p>').text(`Description: ${task.description}`);
    const dueDateElement = $('<p>').text(`Due Date: ${task.dueDate}`);
    const deleteButton = $('<button>').text('Delete').addClass('delete-task-btn');

    taskCard.append(taskNameElement, taskDescriptionElement, dueDateElement, deleteButton);

//  function to delete task task card.
    deleteButton.on('click', function() {
        const taskId = task.id;
        taskList = taskList.filter(t => t.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        taskCard.remove();
    });

// Make the task card draggable within the swim lanes.
taskCard.draggable({
    revert: "invalid",
    cursor: "move",
    containment: ".swim-lanes",
    helper: function (e) {
      const original = $(e.target).hasClass("ui-draggable")
        ? $(e.target)
        : $(e.target).closest(".ui-draggable");
      return original.clone().css({
        maxWidth: original.outerWidth(),
      });
    },
  });
    return taskCard;
}

function renderTaskList() {
    function handleDrop(event, ui) {
        const droppedTask = ui.draggable;
        const newStatusLane = $(this);
    
        // Check if the new status lane is a valid swim lane
        if (newStatusLane.hasClass('lane')) {
            // Update the task's status based on the new status lane
            const taskId = droppedTask.data('taskId');
            const newStatus = newStatusLane.attr('id');
    
            taskList.forEach(task => {
                if (task.id === taskId) {
                    // Remove previous swim lane class
                    droppedTask.removeClass(task.status);
                    // Update the task's status and add the new swim lane class
                    task.status = newStatus;
                    droppedTask.addClass(newStatus);
                }
            });
    
            localStorage.setItem('tasks', JSON.stringify(taskList));
    
            // Move the dropped task to the new status lane
            droppedTask.appendTo(newStatusLane);
        }
    }
    
    // Update the droppable event binding to handle the drop event
    $('.lane').droppable({
        accept: '.task-card',
        drop: handleDrop
    });
    

    const todoCards = $('#todo-cards');
    const inProgressCards = $('#in-progress-cards');
    const doneCards = $('#done-cards');

    todoCards.empty();
    inProgressCards.empty();
    doneCards.empty();

    taskList.forEach(task => {
        const taskCard = createTaskCard(task);

    
        taskCard.addClass(task.status);

        if (task.status === 'to-do') {
            todoCards.append(taskCard);
        } else if (task.status === 'in-progress') {
            inProgressCards.append(taskCard);
        } else if (task.status === 'done') {
            doneCards.append(taskCard);
        }
    });
}
// Function to format the due date using Day.js
function formatDueDate(dueDate) {
    return dayjs(dueDate).format('MMM DD, YYYY');
}

// Call renderTaskList to initially render the task list
renderTaskList();

// Event listener for adding a new task using jQuery.
$('#formSubmit').on('click', function(event) {
    event.preventDefault();

    const taskName = $('#taskName').val();
    const taskDescription = $('#taskDescription').val();
    const dueDate = $('#dueDate').val();

    let newTask = {
        id: generateTaskId(),
        name: taskName,
        description: taskDescription,
        dueDate: dueDate,
        status: 'to-do'
    };

    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    renderTaskList();

    $('#taskName, #taskDescription, #dueDate').val('');
    $('#myModal').modal('hide');
});

// Event listener for closing the modal using jQuery
$('.close').on('click', function() {
    $('#myModal').modal('hide');
});

// When the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Render Task List
    function renderTasks() {
        // Retrieve tasks from localStorage and render on the task board
    }
})
