
function createDivs(n) {

  const container = document.querySelector(".grid");

  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    div.addEventListener("mouseenter", e => e.target.classList.add("etch"));

    container.appendChild(div);
  }

}

createDivs(10);

function clearPad() {
  const blocks = Array.from(document.querySelectorAll(".block"));
  blocks.forEach(block => block.classList.remove("etch"));
}