const taskContainer = document.querySelector('.task-list');

const taskList = () => {
  const tasks = [1, 2, 3];

  // const addTask = (task) => {
  //   return taskList.tasks.push(task);
  // };

  const getTasks = () => tasks;

  return { getTasks };
};

const createTaskList = () => {
  const createTask = document.querySelector('.new-task');
  createTask.addEventListener('click', () => {
    console.log(taskList.getTasks());
  });
};

export { createTaskList };
