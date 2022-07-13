const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  grid.appendChild(row);
}
