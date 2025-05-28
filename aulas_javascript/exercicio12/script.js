const ul = document.querySelector('#todo-list');

window.onload = () => {
    let storageTasks = localStorage.getItem('todolist') || [];
    storageTasks = JSON.parse(storageTasks);
    console.log(storageTasks);
    
    storageTasks.forEach((li) => {
        let element = document.createElement('li');
        element.textContent = li.task;
        if (li.done) {
            element.classList.add('done');
        }
        ul.appendChild(element);
    });
}

function addTask() {
    const text_task = document.getElementById('task');

    if (text_task.value === '') {
        return 0;
    }

    let element = document.createElement('li');
    element.textContent = text_task.value;

    // adicionar o botão de remover
    let btnRemover = document.createElement('button');
    btnRemover.classList.add('remove');
    btnRemover.textContent = 'Remover';
    element.appendChild(btnRemover);
        	
    // remover o elemento
    btnRemover.onclick = (event) => {
        event.stopPropagation(); //correcao
        element.remove();
        storingTasks(); //correcao
    }
    // colocar como done
    element.onclick = () => {
        element.classList.toggle('done');
        storingTasks(); //correcao
    }


    ul.appendChild(element);
    storingTasks();

    text_task.value = '';
}

function storingTasks() {
    let tasks = [];
    const list = document.querySelectorAll('#todo-list li');

    list.forEach((li) => {
        let task_text = li.childNodes[0].nodeValue.trim(); //correcao
        tasks.push({
            task: task_text,
            done: li.classList.value,
        });
    });
    console.log(tasks);
    localStorage.setItem('todolist', JSON.stringify(tasks));
}