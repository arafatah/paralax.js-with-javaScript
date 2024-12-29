const scenes = document.querySelectorAll(".scene");
// initial styles
scenes.forEach((scene) => {
  scene.style.position = "relative";
  scene.style.transform = "translate3d(0px, 0px, 0px)";
  scene.style.transformStyle = "preserve-3d";
  scene.style.backfaceVisibility = "hidden";
});

document.addEventListener("mousemove", (e) => {
  // mouse position relative to the center of the viewport
  const xPos = (e.clientX - window.innerWidth / 2) / 100;
  const yPos = (e.clientY - window.innerHeight / 2) / 100;

  scenes.forEach((scene) => {
    const depth = scene.dataset.depth || 1;
    scene.style.transform = `translate3d(${xPos * depth}px, ${yPos * depth}px, 0)`;
    scene.style.transformStyle = "preserve-3d";
    scene.style.backfaceVisibility = "hidden";
    scene.style.transition = "transform 0.1s ease-out";
  });

  // Update the container's position for a subtle overall movement
  const container = document.querySelector(".container");
  container.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  container.style.transformStyle = "preserve-3d";
  container.style.backfaceVisibility = "hidden";
  container.style.transition = "transform 0.1s ease-out";
});

