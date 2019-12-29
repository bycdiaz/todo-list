const taskContainer = document.querySelector('.task-list');

const taskList = () => {
  const tasks = ['test1', 'test2', 'test3'];

  const getTasks = () => tasks;

  const getNewTask = () => {
    // const newTaskFormContainer = document.querySelector('.task-details');
    // newTaskFormContainer.innerHTML = '';

    const form = document.querySelector('.form');
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }

  };

  const addTask = (newTask) => {
    tasks.push(newTask);
  };

  const updateListView = () => {
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      taskContainer.appendChild(taskDiv);

      const taskName = document.createElement('p');
      taskName.innerText = `${task}`;
      taskDiv.appendChild(taskName);

      const taskCheckBox = document.createElement('button');
      taskCheckBox.type = 'button';
      taskCheckBox.innerText = 'Delete';
      taskDiv.appendChild(taskCheckBox);
    });
  };

  return {
    getTasks,
    getNewTask,
    addTask,
    updateListView,
  };
};

const myTaskList = taskList();

const renderTaskList = () => {
  const newTask = document.querySelector('.new-task');
  myTaskList.updateListView();

  newTask.addEventListener('click', () => {
    myTaskList.getNewTask();
    // myTaskList.updateListView();
  });
};

export { renderTaskList };
