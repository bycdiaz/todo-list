const form = () => {
  const formView = document.querySelector('.form');

  const cancel = () => {
    const cancelButton = document.querySelector('#cancel');
    cancelButton.addEventListener('click', () => {
      taskName.value = '';
      description.value = '';
      formView.style.display = 'none';
    });
  };

  const toggleFormView = () => {
    // clears all info except form in right-pane
    const taskDetails = document.querySelector('.task-details');
    taskDetails.innerHTML = '';

    // toggles form
    if (formView.style.display === 'block') {
      formView.style.display = 'none';
    } else {
      formView.style.display = 'block';
      cancel();
    }
  };

  return {
    toggleFormView,
    cancel,
  };
};

export { form };
