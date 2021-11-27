let divAmount = 16;

const container = document.querySelector(".grid");

let gridContainerWidthAndHeight = "480px";
container.style.width = gridContainerWidthAndHeight;
container.style.height = gridContainerWidthAndHeight;

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
sliderValue.innerText = slider.value;

function createDivs(n) {

  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }

  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

  for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    div.addEventListener("mouseenter", e => e.target.classList.add("etch"));

    container.appendChild(div);
  }

}

createDivs(divAmount);
slider.value = divAmount;
sliderValue.innerText = `${slider.value} x ${slider.value}`;

function clearPad() {
  const blocks = Array.from(document.querySelectorAll(".block"));
  blocks.forEach(block => block.classList.remove("etch"));
}

slider.oninput = function() {
  let divs = this.value;
  sliderValue.innerText = `${divs} x ${divs}`;
  createDivs(this.value);
}