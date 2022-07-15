const grid = document.querySelector(".grid");

function makeGrid(numOfRows) {
  const total = numOfRows * numOfRows;
  grid.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;

  for (let i = 0; i < total; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "black";
    });
  }
}

makeGrid(16);
