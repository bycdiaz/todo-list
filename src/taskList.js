import { form } from './form.js'
import { displayDetails } from './taskDetails.js'

const myDisplayDetails = displayDetails();
const taskContainer = document.querySelector('.task-list');
const myForm = form();


const taskList = () => {
  const tasks = [];

  const getTasks = () => tasks;

  const addTask = (newTask) => {
    tasks.push(newTask);
  };

  const submitNewTask = () => {
    const submitButton = document.querySelector('#submit-task');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newTask = {
        name: taskName.value,
        description: description.value,
      };
      console.log(newTask);
      addTask(newTask);
      updateListView();
      taskName.value = '';
      description.value = '';
      myForm.toggleFormView();
    });
  };

  const updateListView = () => {
    let taskCount = 0;

    taskContainer.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      taskDiv.id = `${taskCount}`;
      taskContainer.appendChild(taskDiv);

      const taskName = document.createElement('p');
      taskName.innerText = task.name;
      taskName.id = `${taskCount}`;
      taskDiv.appendChild(taskName);

      const taskDelete = document.createElement('button');
      taskDelete.type = 'button';
      taskDelete.innerText = 'Delete';
      taskDelete.addEventListener('click', () => {
        tasks.splice(index, 1);
        return updateListView();
      });
      taskDiv.appendChild(taskDelete);
      taskCount += 1;
    });
  };

  const displayTaskDetails = () => {
    taskContainer.addEventListener('click', (event) => {
      myDisplayDetails.createDetails(getTasks()[event.target.id]);
    });
  };

  return {
    getTasks,
    addTask,
    submitNewTask,
    updateListView,
    displayTaskDetails,
  };
};

const myTaskList = taskList();

const renderTaskList = () => {
  const newTask = document.querySelector('.new-task');

  newTask.addEventListener('click', () => {
    myForm.toggleFormView();
    myForm.reset();
    myTaskList.updateListView();
  });
  
  myTaskList.submitNewTask();
  myTaskList.displayTaskDetails();
};

export { taskList, renderTaskList };
