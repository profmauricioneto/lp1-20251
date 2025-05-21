function addTask() {
    const ul = document.querySelector('#todo-list');
    const text_task = document.getElementById('task');

    if (text_task.value === '') {
        return 0;
    }

    let element = document.createElement('li');
    element.textContent = text_task.value;

    // criando a acao de clicar
    element.onclick = () => element.classList.toggle('done');

    ul.appendChild(element);
    updateLocalStorage();

    text_task.value = '';
}