function showTaskCompleted(taskActive) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  taskActive.forEach(elemento => {
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
}

function filterCompleted() {
  const taskCompleted = allTask.filter(task => {
    return task.checked === true
  })
  
  showTaskCompleted(taskCompleted)
};

const liTaskCompleted = document.querySelector('.task-completed')
liTaskCompleted.addEventListener('click', filterCompleted)