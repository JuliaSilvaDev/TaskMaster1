document.getElementById('task-input').addEventListener('keypress', function(event) {
    // Quando pressionar 'Enter'
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
        // Cria uma nova tarefa
        const taskText = event.target.value.trim();
        addTask(taskText);

        // Limpa o campo de entrada
        event.target.value = '';
    }
});

function addTask(taskText) {
    // Cria o item de tarefa
    const taskList = document.getElementById('task-list');

    // Cria o item de tarefa
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Cria a checklist (checkbox)
    const checklist = document.createElement('div');
    checklist.classList.add('checklist');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Adiciona evento para remover a tarefa ao marcar o checkbox
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskList.removeChild(taskItem);
        }
    });

    checklist.appendChild(checkbox);

    // Cria o título da tarefa
    const title = document.createElement('span');
    title.textContent = taskText;

    // Cria a seta para a próxima tela
    const arrow = document.createElement('span');
    arrow.classList.add('arrow');
    arrow.innerHTML = '&#8594;'; // HTML code for the right arrow
    arrow.addEventListener('click', () => {
        window.location.href = 'outra_tela.html'; // Redireciona para a outra tela
    });

    // Adiciona todos os elementos ao item de tarefa
    taskItem.appendChild(checklist);
    taskItem.appendChild(title);
    taskItem.appendChild(arrow);

    // Adiciona o item de tarefa à lista de tarefas
    taskList.appendChild(taskItem);
}
