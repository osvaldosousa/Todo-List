function toggleCheck(event) {
  const idiceArrray = event.target.attributes.id.value;
  const liTasks = document.querySelector('.list-tasks')

  if(allTask[idiceArrray].checked) {
    allTask[idiceArrray].checked = false;
    liTasks.classList.remove('-completed')
    return
  }

  if(!allTask[idiceArrray].checked) {
    allTask[idiceArrray].checked = true;
    liTasks.classList.add('-completed')
  }
};