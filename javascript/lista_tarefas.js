document.getElementById('task-input').addEventListener('keypress', function(event) {
    
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
       
        const taskText = event.target.value.trim();
        addTask(taskText);

        event.target.value = '';
    }
});

function addTask(taskText) {
    
    const taskList = document.getElementById('task-list');


    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

   
    const checklist = document.createElement('div');
    checklist.classList.add('checklist');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

  
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskList.removeChild(taskItem);
        }
    });

    checklist.appendChild(checkbox);

    const title = document.createElement('span');
    title.textContent = taskText;

 
    const arrow = document.createElement('span');
    arrow.classList.add('arrow');
    arrow.innerHTML = '&#8594;';
    arrow.addEventListener('click', () => {
        window.location.href = 'gerenciamento_tarefas.html'; 
    });

    taskItem.appendChild(checklist);
    taskItem.appendChild(title);
    taskItem.appendChild(arrow);

  
    taskList.appendChild(taskItem);
}

