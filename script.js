async function lock() {
  await document.documentElement.requestFullscreen();
  const currentOrientation = screen.orientation.type;
  const isPortrait = currentOrientation.includes("portrait");
  const newOrientation = `${ isPortrait ? "landscape" : "portrait" }-primary`;
  try {
    await screen.orientation.lock(newOrientation);
  } catch (err) {
    console.log(`main doc error: ${err}`)
  }
}

async function iframeLock(){
  const iframe = window.frames['testIframe'];
  await iframe.requestFullscreen();
  const iframeOrientation = iframe.contentWindow.screen.orientation.type;
  const isPortrait = iframeOrientation.includes("portrait");
  const newOrientation = `${ isPortrait ? "landscape" : "portrait" }-primary`;
  try {
    await iframe.contentWindow.screen.orientation.lock(newOrientation);
    console.log(`iframe orientation is ${iframe.contentWindow.screen.orientation.type}`)
  } catch (err) {
    console.log(`iframe error: ${err}`)
  }
}

window.onload = lock();