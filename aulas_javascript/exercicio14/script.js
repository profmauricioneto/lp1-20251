let tasks = [];

const form = document.querySelector('#form-tasks');
const taskList = document.querySelector('#task-list');

updateForm();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDescription = document.querySelector('#task-input');
    const taskLevel = document.querySelector('#task-level');

    const newTask = {task: taskDescription.value, level: taskLevel.value};

    tasks.push(newTask);

    const levels = {high: 1, medium: 2, low: 3};
    tasks.sort((a, b) => {
        return levels[a.level] - levels[b.level];
    });

    taskList.innerHTML='';
    tasks.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = `${item.task} - ${item.level}`;
        taskList.appendChild(li);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    form.reset();
});

function updateForm() {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));

    savedTasks.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = `${item.task} - ${item.level}`;
        taskList.appendChild(li);
    });

}