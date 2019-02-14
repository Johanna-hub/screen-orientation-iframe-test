
//  "Test subframes receive orientation change events"

async function iframe() {
  const iframe = document.getElementById("testIframe")
  iframe.requestFullscreen();
  let orientations = [
    'portrait-primary',
    'portrait-secondary',
    'landscape-primary',
    'landscape-secondary'
  ];
  if (screen.orientation.type.includes('portrait')) {
    orientations = orientations.reverse();
  }
  
  function log(any){
    console.log(`${any}`);
  }

  screen.orientation.addEventListener("message", log("message"))

  for (const orientation of orientations) {
    await screen.orientation.lock(orientation);
  }
  screen.orientation.unlock();
  iframe.exitFullscreen();
}

