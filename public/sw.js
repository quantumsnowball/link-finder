chrome.action.onClicked.addListener(() => {
  // Define screen dimensions
  const screenWidth = 2560;
  const screenHeight = 1080;

  // Define popup window size
  const popupWidth = 1024;
  const popupHeight = 768;

  // Calculate the position to center the popup
  const left = (screenWidth / 2) - (popupWidth / 2);
  const top = (screenHeight / 2) - (popupHeight / 2);

  // Create window
  chrome.windows.create({
    type: "popup",
    url: chrome.runtime.getURL("index.html"),
    width: popupWidth, // Set the width of the popup
    height: popupHeight, // Set the height of the popup
    left: left, // Set the horizontal position (distance from the left of the screen)
    top: top, // Set the vertical position (distance from the top of the screen)
  });
});
