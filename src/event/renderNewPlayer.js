import gameBoard from '../logic/gameBoard';

const renderNewPlayer = (() => {
  const eventNewPlayer = () => {
    gameBoard.resetBoard();
    document.querySelector('.board').style.display = 'none';
    document.getElementById('divForm').style.display = 'block';
  };

  const getNewPlayerButton = () => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      eventNewPlayer();
    });
    button.classList.add('sign-in', 'font', 'top');
    if (document.contains(document.getElementById('newplayer'))) {
      document.getElementById('newplayer').remove();
    }
    button.setAttribute('id', 'newplayer');
    button.textContent = 'New Player';
    return button;
  };
  return {
    eventNewPlayer,
    getNewPlayerButton,
  };
})();

export default renderNewPlayer;
