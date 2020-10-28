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

test('Board set choice', () => {
  gameBoard.setBoard(0);
  expect(gameBoard.getBoard()).toEqual(['O', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ']);
});

test('Board chech winner', () => {
  expect(checkBoard.checkWin()).toBe(false);
});

test('Check winner (X) ', () => {
  gameBoard.setBoard(0);
  gameBoard.setBoard(3);
  gameBoard.setBoard(1);
  gameBoard.setBoard(4);
  gameBoard.setBoard(2);
  gameBoard.setBoard(8);
  expect(checkBoard.checkWin()).toEqual('X');
});

test('Get winner Name (Edie)', () => {
  expect(checkBoard.getWinnerName(playerone, playertwo)).toEqual('Edie');
});


test('Draw game ', () => {
  gameBoard.setBoard(0);
  gameBoard.setBoard(1);
  gameBoard.setBoard(2);
  gameBoard.setBoard(4);
  gameBoard.setBoard(3);
  gameBoard.setBoard(5);
  gameBoard.setBoard(6);
  gameBoard.setBoard(7);
  gameBoard.setBoard(8);
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
