/* const scenes = document.querySelectorAll(".scene");

// initial styles
scenes.forEach((scene) => {
  scene.style.position = "relative";
  scene.style.transform = "translate3d(0px, 0px, 0px)";
  scene.style.transformStyle = "preserve-3d";
  scene.style.backfaceVisibility = "hidden";
});

document.addEventListener("mousemove", (e) => {
  // mouse position 
  const xPos = (e.clientX - window.innerWidth / 2) / 100;
  const yPos = (e.clientY - window.innerHeight / 2) / 100;

  scenes.forEach((scene) => {
    const depth = scene.dataset.depth || 1;
    scene.style.transform = `translate3d(${xPos * depth}px, ${yPos * depth}px, 0)`;
    scene.style.transformStyle = "preserve-3d";
    scene.style.backfaceVisibility = "hidden";
    scene.style.transition = "all 0.3s ease-out";
  });
});
 */

// With class - Original
class Parallax {
  constructor() {
    this.scenes = document.querySelectorAll(".scene");
    this.init();
  }

  init() {
    this.scenes.forEach((scene) => {
      scene.style.position = "relative";
      scene.style.transform = "translate3d(0px, 0px, 0px)";
      scene.style.transformStyle = "preserve-3d";
      scene.style.backfaceVisibility = "hidden";
    });

    document.addEventListener("mousemove", (e) => {
      this.update(e);
    });
  }

  update(e) {
    const xPos = (e.clientX - window.innerWidth / 2) / 100;
    const yPos = (e.clientY - window.innerHeight / 2) / 100;

    this.scenes.forEach((scene) => {
      const depth = scene.dataset.depth || 1;
      scene.style.transform = `translate3d(${xPos * depth}px, ${
        yPos * depth
      }px, 0)`;
      scene.style.transformStyle = "preserve-3d";
      scene.style.backfaceVisibility = "hidden";
      scene.style.transition = "all 0.3s ease-out";
    });
  }
}

new Parallax();
