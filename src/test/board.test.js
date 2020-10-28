import gameBoard from '../logic/gameBoard';
import checkBoard from '../logic/checkBoard';
import Player from '../logic/player';

const playerone = Player('Josia');
const playertwo = Player('Edie');

test('Check if board is not full', () => {
  expect(checkBoard.notFull()).toBe(true);
});

test('Board check winner first move', () => {
  expect(checkBoard.checkWin()).toBe(false);
});

test('Check winner (O) ', () => {
  gameBoard.setBoard(0);
  gameBoard.setBoard(3);
  gameBoard.setBoard(1);
  gameBoard.setBoard(4);
  gameBoard.setBoard(2);
  gameBoard.setBoard(8);
  expect(checkBoard.checkWin()).toEqual('O');
});

test('Get winner Name (Josia)', () => {
  expect(checkBoard.getWinnerName(playerone, playertwo)).toEqual('Josia');
});


test('Draw game ', () => {
  gameBoard.setBoard(0);
  gameBoard.setBoard(8);
  gameBoard.setBoard(1);
  gameBoard.setBoard(2);
  gameBoard.setBoard(3);
  gameBoard.setBoard(4);
  gameBoard.setBoard(5);
  gameBoard.setBoard(6);
  gameBoard.setBoard(7);
  console.log(gameBoard.getBoard());
  expect(checkBoard.drawGame()).toBe(true);
});

test('Check the Board is full', () => {
  gameBoard.setBoard(0);
  gameBoard.setBoard(1);
  gameBoard.setBoard(2);
  gameBoard.setBoard(4);
  gameBoard.setBoard(3);
  gameBoard.setBoard(5);
  gameBoard.setBoard(6);
  gameBoard.setBoard(7);
  gameBoard.setBoard(8);
  expect(checkBoard.notFull()).toBe(false);
});
