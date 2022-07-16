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

function sketchBlack() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#000";
    });
  });
}

const black = document.querySelector(".black");
black.addEventListener("click", sketchBlack);

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

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.style.backgroundColor = "#fff";
  });
});

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

const randomizer = document.querySelector(".rgb");
randomizer.addEventListener("click", getRandomColor);
