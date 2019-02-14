
//  "Test subframes receive orientation change events"

async function iframe() {
  await document.documentElement.requestFullscreen();
  // const iframe = document.getElementById("testIframe")
  // await iframe.requestFullscreen();
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

  screen.orientation.addEventListener("message", log(message.data))

  for (const orientation of orientations) {
    await screen.orientation.lock(orientation);
  }
  screen.orientation.unlock();
  return document.exitFullscreen();
}

