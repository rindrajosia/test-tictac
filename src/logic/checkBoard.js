import gameBoard from './gameBoard';

const checkBoard = (() => {
  const arrBoard = gameBoard.getBoard();
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const notFull = () => arrBoard.some((currentValue) => currentValue === ' - ');

  const checkWin = () => {
    for (let i = 0; i < line.length; i += 1) {
      const [a, b, c] = line[i];
      if (arrBoard[a] === arrBoard[b] && arrBoard[b] === arrBoard[c] && arrBoard[a] !== ' - ') {
        return arrBoard[a];
      }
    }
    return false;
  };

  const getWinnerName = (arg1, arg2) => (checkWin() === 'O' ? arg1.getName() : arg2.getName());

  const drawGame = () => {
    if (!notFull() && !checkWin()) {
      return true;
    }
    return false;
  };

  return {
    notFull,
    checkWin,
    getWinnerName,
    drawGame,
  };
})();

export default checkBoard;
