const scenes = document.querySelectorAll(".scene");

document.addEventListener("mousemove", (e) => {
  // Get mouse position relative to the center of the viewport
  const xPos = (e.clientX - window.innerWidth / 2) / 100;
  const yPos = (e.clientY - window.innerHeight / 2) / 100;

  const multipliers = [2, 1.5, 3, 2.5];

  scenes.forEach((scene, index) => {
    // Apply transform with different intensity for each box
    scene.style.transform = `translate3d(${xPos * multipliers[index]}px, ${
      yPos * multipliers[index]
    }px, 0)`;
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

// Add some initial styles programmatically
scenes.forEach((scene) => {
  scene.style.position = "relative";
  scene.style.transform = "translate3d(0px, 0px, 0px)";
  scene.style.transformStyle = "preserve-3d";
  scene.style.backfaceVisibility = "hidden";
});
