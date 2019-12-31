import { form } from './form.js'
import { taskDetails } from './taskDetails.js';

const taskContainer = document.querySelector('.task-list');
const myForm = form();
const myTaskDetails = taskDetails();

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

      addTask(newTask);
      updateListView();
      taskName.value = '';
      description.value = '';
      myForm.toggleFormView();
      myTaskDetails.identifyTask();
    });
  };

  const updateListView = () => {
    let taskCount = 0;

    taskContainer.innerHTML = '';
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      taskContainer.appendChild(taskDiv);

      const taskName = document.createElement('p');
      taskName.innerText = `${task.name}`;
      taskName.id = `${taskCount}`;
      taskDiv.appendChild(taskName);

      const taskCheckBox = document.createElement('button');
      taskCheckBox.type = 'button';
      taskCheckBox.innerText = 'Delete';
      taskDiv.appendChild(taskCheckBox);
      taskCount += 1;
    });
  };

  return {
    getTasks,
    addTask,
    submitNewTask,
    updateListView,
  };
};

const myTaskList = taskList();

const renderTaskList = () => {
  const newTask = document.querySelector('.new-task');

  newTask.addEventListener('click', () => {
    myForm.toggleFormView();
    myTaskList.updateListView();
  });

  myTaskList.submitNewTask();
};

export { taskList, renderTaskList };
