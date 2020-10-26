import logo from '../assets/img/pngwave.png';
import lock from '../assets/img/lock.png';

const loading = () => {
  document.body.innerHTML += `<section class="flex">
  <div class="center">
  <div class="flex logo-container">
  <img class="logo" src="${logo}" alt="logo">
  </div>
  <div class="form" id = "divForm">
  <form id = "myForm" action = "/" method = "GET">
  <div class="input-container">
  <label class="font" for="email">Player O : </label>
  <input class="font input" id="playerone" name="playerone" type="text" required>
  </div>
  <div class="input-container">
  <label class="font" for="phone">Player X : </label>
  <input class="font input" id="playertwo" name="playertwo" type="text" required>
  </div>
  <div class="input-container">
  <button class="font" id="submit" type="submit">
  <img class="icon-lock" src="${lock}" alt="lock">Play
  </button>
  </div>
  </form>
  </div>
  <div class="board">
  <div class="font">
  <span class="title"></span>
  </div>
  <div class="grid">
  </div>
  <nav class="container-button">
  <ul class="flex">
  <li>
  <div class="box box-reset"></div>
  </li>
  <li>
  <div class="box box-newplayer"></div>
  </li>
  </ul>
  </nav>
  </div>
  </div>
  </section>`;
};
export default loading;
