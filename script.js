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
