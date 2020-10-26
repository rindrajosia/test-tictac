import eventAddElement from './eventAddElement';

const eventTD = (arg1, arg2) => {
  const allTds = document.querySelectorAll('td');
  for (let i = 0; i < allTds.length; i += 1) {
    allTds[i].addEventListener('click', eventAddElement.bind(allTds[i], i, arg1, arg2));
  }
};

export default eventTD;
