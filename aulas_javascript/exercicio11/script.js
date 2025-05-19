function adicionarLinha() {
    let inputLanguage = document.querySelector('#language-input').value;
    let inputLevel = document.querySelector('#level').value;

    if (inputLanguage === '') {
        window.alert('preencha o campo!');
        return;
    } 

    let line = document.createElement('tr');

    let columnLanguage = document.createElement('td')
    columnLanguage.innerText = inputLanguage;

    let columnLevel = document.createElement('td');
    columnLevel.innerText = inputLevel;

    line.appendChild(columnLanguage);
    line.appendChild(columnLevel);

    let table = document.querySelector('#table-todolist');
    table.appendChild(line);

}