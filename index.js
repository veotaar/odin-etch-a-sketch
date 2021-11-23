let divAmount = 16;
const container = document.querySelector(".grid");

const slider = document.querySelector(".slider");
console.log(slider);
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

console.log(container);

function clearPad() {
  const blocks = Array.from(document.querySelectorAll(".block"));
  blocks.forEach(block => block.classList.remove("etch"));
}

slider.oninput = function() {
  let divs = this.value;
  sliderValue.innerText = `${divs} x ${divs}`;
  createDivs(this.value);
}