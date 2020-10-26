import gameBoard from '../logic/gameBoard';
import displayError from '../view/getError';
import showTitle from '../view/showTitle';
import checkBoard from '../logic/checkBoard';

const eventAddElement = (position, arg1, arg2) => {
  const arrBoard = gameBoard.getBoard();
  if (gameBoard.getValue(position) !== ' - ') {
    displayError('Choose another cell');
  } else if (!checkBoard.drawGame() && !checkBoard.checkWin()) {
    gameBoard.setBoard(position);
    const allTds = document.querySelectorAll('td');
    allTds[position].innerHTML = arrBoard[position];
    showTitle(arg1, arg2);
  }
};
export default eventAddElement;
