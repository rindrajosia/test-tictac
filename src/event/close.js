const closeModal = (icon, modal) => {
  const closeIcon = document.getElementById(icon);
  const modalError = document.getElementById(modal);
  closeIcon.addEventListener('click', () => {
    modalError.style.display = 'none';
  });
};
export default closeModal;
