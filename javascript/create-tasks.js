const allTask = [];
function newTask(task) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  allTask.push({
    texto: task,
    checked: false,
    id: allTask.length
  })

  allTask.forEach(elemento => {
    $boxTasks.insertAdjacentHTML("beforeend", `
      <li class="list-tasks">
        <input
          type="checkbox"
          name="meu-checkbox"
          data-task="task-item"
          class= "item-task"
          id= ${elemento.id}
          ${elemento.checked ? 'checked': ''}
        />
        <label for="task-item">${elemento.texto}</label>
      </li>
  `);
  })

  const taskCreated = document.querySelectorAll('[data-task]');
  taskCreated.forEach((checkedBox) => {
    checkedBox.addEventListener('click', checkInput)
  })
  
};

function handleNewTask() {
  const tasksInput = document.querySelector('.new-task');
  const taskValue = tasksInput.value

  if (taskValue === "") return

  tasksInput.value = "";

  newTask(taskValue);
};

const buttonNewTask = document.querySelector('.btn-new-task');
buttonNewTask.addEventListener('click', handleNewTask);