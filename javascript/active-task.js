function showTaskActive(taskActive) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  taskActive.forEach(elemento => {
    $boxTasks.insertAdjacentHTML("beforeend", `
      <li class="list-tasks">
        <input
          onclick="toggleCheck(event)"
          type="checkbox"
          name="meu-checkbox"
          data-task="task-item"
          id= ${elemento.id}
          class= "item-task"
          ${elemento.checked ? 'checked': ''}
        />
        <label for="task-item">${elemento.texto}</label>
      </li>
  `)
  });
}

function filterActive() {
  const taskActive = allTask.filter(task => {
    return task.checked === false
  })
  
  showTaskActive(taskActive)
};

const liTaskActive = document.querySelector('.task-active')
liTaskActive.addEventListener('click', filterActive)