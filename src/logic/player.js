import gameBoard from './gameBoard';

const Player = (name) => {
  const getName = () => name;

  const turnName = opponent => (gameBoard.logicTurn() ? getName() : opponent.getName());
  return {
    getName,
    turnName,
  };
};

export default Player;
