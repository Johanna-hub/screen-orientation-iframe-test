export async function makeIFrame(src = "about:blank") {
  const iframe = document.createElement("iframe");
  iframe.srcdoc = `Test`;
  iframe.id = "iframe";
  document.body.appendChild(iframe);
  await new Promise(r => {
    if (iframe.contentDocument.readyState === "complete") {
      return r(); // it's loaded
    }
    iframe.onload = r;
  });
  return iframe;
}

export function getOppositeOrientation() {
  const currentOrientation = screen.orientation.type;
  const isPortrait = currentOrientation.includes("portrait");
  return (newOrientation = `${isPortrait ? "landscape" : "portrait"}`);
}
