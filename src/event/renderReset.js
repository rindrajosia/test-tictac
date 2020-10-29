import gameBoard from '../logic/gameBoard';
import render from '../view/render';

const renderReset = (() => {
  const eventResetBoard = (arg1, arg2) => {
    gameBoard.resetBoard();
    render(arg1, arg2);
  };

  const getResetButton = (arg1, arg2) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      eventResetBoard(arg1, arg2);
    });
    button.classList.add('sign-in', 'font', 'top');
    if (document.contains(document.getElementById('reset'))) {
      document.getElementById('reset').remove();
    }
    button.setAttribute('id', 'reset');
    button.textContent = 'Reset';
    return button;
  };
  return {
    getResetButton,
    eventResetBoard,
  };
})();

export default renderReset;
