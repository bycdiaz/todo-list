const taskContainer = document.querySelector('.task-list');

const taskList = () => {
  const tasks = ['test1', 'test2', 'test3'];

  const getTasks = () => tasks;

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
    addTask,
    updateListView,
  };
};

const myTaskList = taskList();

const renderTaskList = () => {
  const newTask = document.querySelector('.new-task');
  myTaskList.updateListView();

  newTask.addEventListener('click', () => {
    myTaskList.addTask('test4');
    myTaskList.updateListView();
  });
};

export { renderTaskList };
