//  "Test subframes receive orientation change events"

async function iframe() {
  await document.documentElement.requestFullscreen();
  let orientations = [
    "portrait-primary",
    "portrait-secondary",
    "landscape-primary",
    "landscape-secondary"
  ];
  if (screen.orientation.type.includes("portrait")) {
    orientations = orientations.reverse();
  }

  for (const orientation of orientations) {
    window.addEventListener(
      "message",
      console.log(`${this.data} + ${orientation} should be the same`)
    );
    await screen.orientation.lock(orientation);
  }
  screen.orientation.unlock();
  return document.exitFullscreen();
}
