chrome.action.onClicked.addListener(async () => {
  const width = 1500
  const height = 720
  const currentWindow = await new Promise(resolve => { chrome.windows.getCurrent(resolve) })
  const left = Math.round(currentWindow.left + (currentWindow.width - width) / 2)
  const top = Math.round(currentWindow.top + (currentWindow.height - height) / 2)
  chrome.windows.create({
    type: "popup",
    url: chrome.runtime.getURL('index.html'),
    width,
    height,
    left,
    top,
  })
})


