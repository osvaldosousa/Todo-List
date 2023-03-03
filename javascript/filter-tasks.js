function filterActive() {
  const taskActive = allTask.filter(task => {
    return task.checked === false
  })
  
  showTasks(taskActive)
};

function filterCompleted() {
  const taskCompleted = allTask.filter(task => {
    return task.checked === true
  })
  
  showTasks(taskCompleted)
};

function handleClickLi(event) {
  const liClick = event.target
  const liClass = document.querySelectorAll('.li-nav');

  liClass.forEach(element => {
    element.classList.remove('-active');
  })
  liClick.classList.add('-active')

  liClick.id === "completed" ? filterCompleted(): 
    liClick.id === "active" ? filterActive(): 
    showTasks(allTask)
}