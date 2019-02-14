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
    function log(event) {
      console.log(`${event.data} + ${orientation} should be the same`);
    }
    window.addEventListener("message", log);
    await screen.orientation.lock(orientation);  
  }
  screen.orientation.unlock();
  return document.exitFullscreen();
}
