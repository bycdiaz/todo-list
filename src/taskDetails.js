const displayDetails = () => {
  const createDetails = (object) => {
    const taskDetailsContainer = document.querySelector('.task-details');
    taskDetailsContainer.innerHTML = '';

    const taskDetail = document.createElement('div');
    taskDetail.className = 'task-detail';
    taskDetailsContainer.appendChild(taskDetail);

    const taskName = document.createElement('p');
    taskName.innerText = `Task Name: ${object.name}`;
    taskDetail.appendChild(taskName);

    const taskDescription = document.createElement('p');
    taskDescription.innerText = `Task Description: ${object.description}`;
    taskDetail.appendChild(taskDescription);
  };


  return {
    createDetails,
  };
};

export { displayDetails };
