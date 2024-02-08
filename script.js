document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton');
    const inputField = document.getElementById('taskInput');
    const tasksList = document.getElementById('tasksList');


    addButton.addEventListener('click', function() {
        const task = inputField.value.trim();
        if (task) {
            addTask(task);
            inputField.value = '';
            saveTasks();
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('deleteTaskButton');
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };
        li.appendChild(deleteButton);
        tasksList.appendChild(li);
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#tasksList li').forEach(function(task) {
            tasks.push(task.textContent.slice(0, -1)); 
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    
});
