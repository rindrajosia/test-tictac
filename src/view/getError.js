import closeModal from '../event/close';

const displayError = (error) => {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = '';
  const modalError = document.getElementById('myModal');
  modalBody.innerHTML = error;
  modalError.style.display = 'block';
  closeModal('close', 'myModal');
};

export default displayError;
