const panels = document.querySelectorAll(".panel");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    currentActive = index + 1;
    console.log(currentActive);
    update();
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    currentActive = 1;
  });
}

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circle.length;
  }

  panels[currentActive - 1].click();
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  panels[currentActive - 1].click();
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("glow");
    } else {
      circle.classList.remove("glow");
    }
  });

  const actives = document.querySelectorAll(".glow");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === circles.length) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const content = document.querySelector(".content");

open.addEventListener("click", () => content.classList.add("show-nav"));

close.addEventListener("click", () => content.classList.remove("show-nav"));

const search = document.querySelector(".search");
const sbtn = document.querySelector(".search-btn");
const input = document.querySelector(".input");

sbtn.addEventListener("click", () => {
  if (input.value == "") {
    search.classList.toggle('active');
  }else{
    panels[input.value-1].click();
    input.value = "";
    search.classList.toggle('active');
  }
  
  
  input.focus();
});
