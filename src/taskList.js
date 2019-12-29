const taskContainer = document.querySelector('.task-list');

const taskList = () => {
  const tasks = ['test1', 'test2', 'test3'];

  const getTasks = () => tasks;

  const toggleFormView = () => {
    // clears all info except form in right-pane
    const taskDetails = document.querySelector('.task-details');
    taskDetails.innerHTML = '';

    const form = document.querySelector('.form');
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
  };

  const submitNewTask = () => {
    const submitButton = document.querySelector('#submit-task');
    submitButton.addEventListener('click', (event) => {
      console.log(event.target);
    });
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
    toggleFormView,
    submitNewTask,
    addTask,
    updateListView,
  };
};

const myTaskList = taskList();

const renderTaskList = () => {
  const newTask = document.querySelector('.new-task');

  newTask.addEventListener('click', () => {
    myTaskList.toggleFormView();
    // myTaskList.updateListView();
  });

  myTaskList.submitNewTask();
};

export { renderTaskList };
