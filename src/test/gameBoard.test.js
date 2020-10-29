import gameBoard from '../logic/gameBoard';

test('Board set choice', () => {
  gameBoard.setBoard(0);
  expect(gameBoard.getBoard()).toEqual(['O', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ']);
});

test('Get value at the index 0 in the array board', () => {
  expect(gameBoard.getValue(0)).toEqual('O');
});

test('Check if X symboles are many than O symboles in the array', () => {
  expect(gameBoard.logicTurn()).toBe(false);
});

test('Rest the board', () => {
  expect(gameBoard.resetBoard()).toEqual([' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ']);
});
