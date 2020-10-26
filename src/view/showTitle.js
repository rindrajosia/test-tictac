import checkBoard from '../logic/checkBoard';
import displayError from './getError';

const showTitle = (arg1, arg2) => {
  const turnDiv = document.querySelector('.title');
  if (checkBoard.drawGame()) {
    displayError('The board is full, its a draw');
    turnDiv.innerHTML = 'The board is full, its a draw';
  } else if (checkBoard.checkWin()) {
    displayError(`The winner is: ${checkBoard.getWinnerName(arg1, arg2)}`);
    turnDiv.innerHTML = `The winner is: ${checkBoard.getWinnerName(arg1, arg2)}`;
  } else {
    turnDiv.innerHTML = `It is your turn: ${arg1.turnName(arg2)}`;
  }
};

export default showTitle;
