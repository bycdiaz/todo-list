import { taskList } from './taskList.js'

const taskDetails = () => {
  const taskDetailsContainer = document.querySelector('.task-details');

  const identifyTask = () => {
    const tasks = document.querySelector('.task-list');
    tasks.addEventListener('click', (event) => {
      console.log(event.target.id);
      console.log(event.target.innerHTML);
    });
  };


  const displayTaskDetails = () => {

  };

  return {
    identifyTask,
    displayTaskDetails,
  };
};

export { taskDetails };
