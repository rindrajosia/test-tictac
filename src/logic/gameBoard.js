const gameBoard = (() => {
  const gameboard = Array(9).fill(' - ');

  const getBoard = () => gameboard;

  const resetBoard = () => gameboard.fill(' - ');

  const getValue = (position) => gameboard[position];

  const getXValue = () => {
    const xarray = gameboard.filter(item => item === 'X');
    return xarray.reduce((sum) => sum + 1, 0);
  };

  const getOValue = () => {
    const oarray = gameboard.filter(item => item === 'O');
    return oarray.reduce((sum) => sum + 1, 0);
  };

  const logicTurn = () => getXValue() >= getOValue();
  const setBoard = (position) => {
    if (logicTurn()) {
      gameboard[position] = 'O';
    } else {
      gameboard[position] = 'X';
    }
  };

  return {
    getBoard,
    getValue,
    logicTurn,
    resetBoard,
    setBoard,
  };
})();

export default gameBoard;
