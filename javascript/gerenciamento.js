
document.getElementById('add-subtask').addEventListener('click', function () {
    const subtaskInput = document.getElementById('subtask-input');
    const subtaskText = subtaskInput.value.trim();

    if (subtaskText !== '') {
        const subtaskList = document.getElementById('subtask-list');


        const subtaskItem = document.createElement('li');
        subtaskItem.classList.add('subtask-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('subtask-checkbox');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                subtaskItem.add();
            }
        });

    
        const subtaskTextElement = document.createElement('span');
        subtaskTextElement.textContent = subtaskText;

     
        subtaskItem.appendChild(checkbox);
        subtaskItem.appendChild(subtaskTextElement);

   
        subtaskList.appendChild(subtaskItem);

        subtaskInput.value = '';
    }
});

document.getElementById('delete-task').addEventListener('click', function () {
    if (confirm('Tem certeza de que deseja excluir todas as tarefas?')) {
        document.getElementById('subtask-list').innerHTML = '';
        document.getElementById('task-date').value = '';
        document.getElementById('details').value = '';
        document.getElementById('note').value = '';
    }
});
