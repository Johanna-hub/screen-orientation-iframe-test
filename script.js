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

  function log(event) {
    console.log(`${event.data}`);
  }

  window.addEventListener("message", log);

  for (const orientation of orientations) {
    await screen.orientation.lock(orientation);
  }
  screen.orientation.unlock();
  return document.exitFullscreen();
}
