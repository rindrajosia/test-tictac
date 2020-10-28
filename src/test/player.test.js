import Player from '../logic/player';
import gameBoard from '../logic/gameBoard';

const playerone = Player('Josia');
const playertwo = Player('Edie');

test('Player One name', () => {
  expect(playerone.getName()).toBe('Josia');
});

test('Player two name', () => {
  expect(playertwo.getName()).toBe('Edie');
});

test('Check Player turn First move', () => {
  expect(playerone.turnName(playertwo)).toBe('Josia');
});

test('Check Player turn Second move', () => {
  gameBoard.setBoard(0);
  expect(playerone.turnName(playertwo)).toBe('Edie');
});
