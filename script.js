
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 1; i <= (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);