function showTasks(arrTasks) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  arrTasks.forEach(elemento => {
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