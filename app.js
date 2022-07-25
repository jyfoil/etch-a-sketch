const randomColorBtn = document.querySelector(".rgb");
const defaultColorBtn = document.querySelector(".black");
const changeSizeBtn = document.querySelector(".size");
const resetBtn = document.querySelector(".reset");

randomColorBtn.addEventListener("click", getRandomColor);
defaultColorBtn.addEventListener("click", getColorBlack);

changeSizeBtn.addEventListener("click", () => {
  resetGrid();
  changeGrid();
});

resetBtn.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.style.backgroundColor = "#fff";
  });
});

makeGrid(16);

function makeGrid(numOfRows) {
  const grid = document.querySelector(".grid");
  const total = numOfRows * numOfRows;
  grid.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;

  for (let i = 0; i < total; i++) {
    const rows = document.createElement("div");
    rows.classList.add("row");
    grid.appendChild(rows);

    rows.addEventListener("mouseover", () => {
      rows.style.backgroundColor = "#000000";
    });
  }
}

function getColorBlack() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#000";
    });
  });
}

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

function getRandomColor() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    color = "#" + color;
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = color;
    });
  });
}
