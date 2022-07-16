function makeGrid(numOfRows) {
  const grid = document.querySelector(".grid");
  const total = numOfRows * numOfRows;
  grid.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;

  for (let i = 0; i < total; i++) {
    const rows = document.createElement("div");
    rows.classList.add("row");
    grid.appendChild(rows);

    rows.addEventListener("mouseover", () => {
      rows.style.backgroundColor = "black";
    });
  }
}

makeGrid(16);

function changeGrid() {
  let newSize = prompt("Please enter the number of squares per side (1-100)");
  if (newSize > 0 && newSize <= 100) {
    makeGrid(newSize);
  } else {
    alert("Enter a number between 1-100");
    makeGrid(16);
  }
}

function resetGrid() {
  const grid = document.querySelector(".grid");
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    grid.removeChild(row);
  });
}

const size = document.querySelector(".size");
size.addEventListener("click", () => {
  resetGrid();
  changeGrid();
});
