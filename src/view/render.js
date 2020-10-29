import eventTD from '../event/eventTD';

const render = (arg1, arg2) => {
  const turnDiv = document.querySelector('.title');
  turnDiv.innerHTML = `It is your turn: ${arg1.turnName(arg2)}`;
  if (document.contains(document.getElementById('myTable'))) {
    document.getElementById('myTable').remove();
  }
  const grid = document.querySelector('.grid');
  const board = document.querySelector('.board');
  const table = document.createElement('table');
  table.setAttribute('id', 'myTable');
  const tbody = document.createElement('tbody');
  tbody.setAttribute('id', 'idTbody');
  for (let i = 0; i < 3; i += 1) {
    const row = document.createElement('tr');
    row.classList.add('row');
    for (let j = 0; j < 3; j += 1) {
      const cell = document.createElement('td');
      cell.innerHTML = ' - ';
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  grid.appendChild(table);
  eventTD(arg1, arg2);
  board.style.display = 'block';
};

export default render;
