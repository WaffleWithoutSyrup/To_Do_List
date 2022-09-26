const input = document.querySelector('.input-btn input');
const listTasks =document.querySelector('.list-tasks ul');
const message =document.querySelector('.list-tasks');
let tasks = [];

function addTask() {
    const task = input.value;
    if (task === '') {
        showError('No hay nada escrito');
        return;
    }

    const taskObj = {
        task,
        id: Date.now()
    }
    tasks = [...task, taskObj]

    createHTML();
    input.value='';
}

function createHTML() {
clearHTML();

    if (tasks.length >0) {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.task} <span task-id="${task.id}">X</span>`;

            listTasks.appendChild(li);
        });
    }
    
}



function showError(error) {
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error');

    message.appendChild(messageError);
    //console.log(error);
    setTimeout(()=> {
        messageError.remove();
    },2000);
}

function clearHTML() {
    listTasks.innerHTML='';
}