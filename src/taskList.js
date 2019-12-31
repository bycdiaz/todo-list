import { form } from './form.js'

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
        priority: priority.value,
      };

      addTask(newTask);
      updateListView();
      console.log(tasks);
      taskName.value = '';
      description.value = '';
    });
  };

  const updateListView = () => {
    taskContainer.innerHTML = '';
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      taskContainer.appendChild(taskDiv);

      const taskName = document.createElement('p');
      taskName.innerText = `${task.name}`;
      taskDiv.appendChild(taskName);

      const taskCheckBox = document.createElement('button');
      taskCheckBox.type = 'button';
      taskCheckBox.innerText = 'Delete';
      taskDiv.appendChild(taskCheckBox);
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
