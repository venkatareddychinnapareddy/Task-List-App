//TAsk list App

let taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', function(event){
 

  let taskInput = document.querySelector('#input-task');
  let task = taskInput.value.trim();


  //get tasks from local stoarge
  let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  taskList.unshift(task);
  
  //set it to local storage

  localStorage.setItem('tasks', JSON.stringify(taskList));  

 displayTask();
});

//display the task in list

let displayTask = () => {
    let taskListEl = document.querySelector('#task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if (taskList.length !==0 ) {
      let eachTask = '';
      for(let task of taskList) {
            eachTask  += `<li class="list-group-item list-group-item-action list-group-item-warning">
                              <span class="font-weight-bold"> ${task} </span>
                              <button class="close">
                              <i class="fa fa-times-circle"></i>
                              </button>
                         </li>`;
      }
      taskListEl.innerHTML = eachTask;
    }
};
displayTask();

//remove task

let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click',function(event){
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-circle')) {
      let actualEl = targetElement.parentElement.parentElement;
      let selectedTask = actualEl.innerText;

      //get data from local storage
      
          let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
          taskList = taskList.filter(function(task){
            return task.trim() !== selectedTask.trim();
          });
           localStorage.setItem('tasks', JSON.stringify(taskList));
           displayTask();
    }
});