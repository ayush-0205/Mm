function revealPage2() {
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
}

function revealPage3() {
  document.getElementById('page2').classList.add('hidden');
  document.getElementById('page3').classList.remove('hidden');
}

// Generate floating flowers
function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".flower-container").appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 400);
