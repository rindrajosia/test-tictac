import Player from '../logic/player';
import render from '../view/render';
import renderReset from './renderReset';
import renderNewPlayer from './renderNewPlayer';

const formEvent = () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (e) => {
    const playerone = Player(document.getElementById('playerone').value);
    const playertwo = Player(document.getElementById('playertwo').value);
    document.getElementById('divForm').style.display = 'none';
    document.querySelector('.board').style.display = 'block';
    render(playerone, playertwo);
    const resetbtn = document.querySelector('.box-reset');
    resetbtn.appendChild(renderReset.getResetButton(playerone, playertwo));
    const newplayer = document.querySelector('.box-newplayer');
    newplayer.appendChild(renderNewPlayer.getNewPlayerButton());
    form.reset();
    e.preventDefault();
  });
};

export default formEvent;
