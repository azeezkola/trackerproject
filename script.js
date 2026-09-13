const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');
const addTaskButton = document.getElementById('add-task');



const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally 
    const taskText = taskInput.value;
    const priority = priorityInput.value;

    if (taskText.trim() !== '') {
        // Create a new task element
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <hr>
            <span class="task-text">${taskText}</span>
            <span class="task-priority">${priority}</span>
        `;

        // Add the task element to the task list
        document.getElementById('task-list').appendChild(taskElement);

        // Clear the input fields
        taskInput.value = '';
        priorityInput.value = 'low';
    }
});