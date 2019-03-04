async function lock() {
  await document.documentElement.requestFullscreen();
  const currentOrientation = screen.orientation.type;
  const isPortrait = currentOrientation.includes("portrait");
  const newOrientation = `${isPortrait ? "landscape" : "portrait"}-primary`;
  try {
    await screen.orientation.lock(newOrientation);
  } catch (err) {
    console.log(`main doc error: ${err}`);
  }
}

async function iframeLock() {
  const iframe = window.frames["testIframe"];
  await iframe.requestFullscreen();
  const iframeOrientation = iframe.contentWindow.screen.orientation.type;
  const isPortrait = iframeOrientation.includes("portrait");
  const newOrientation = `${isPortrait ? "landscape" : "portrait"}-primary`;
  try {
    await iframe.contentWindow.screen.orientation.lock(newOrientation);
    console.log(
      `iframe orientation is ${iframe.contentWindow.screen.orientation.type}`
    );
  } catch (err) {
    console.log(`iframe error: ${err}`);
  }
}

function checkFocus() {
  const iframe = window.frames["testIframe"];
  const focus = document.hasFocus ? "doc" : "iframe";
  const focusOrientation = document.hasFocus
    ? screen.orientation.type
    : iframe.contentWindow.screen.orientation.type;
    console.log(`focused ${focus} has ${focusOrientation}`)
}

function checkiframeFocus() {
  if (document.activeElement instanceof HTMLIFrameElement) {
    console.log(`iframe has ${screen.orientation.type}`)
  } else {
    console.log(`doc has the focus and is ${screen.orientation.type}`)
  } 
}

// window.onload = lock();
