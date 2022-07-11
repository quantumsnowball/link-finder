chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    type: "popup",
    url: chrome.runtime.getURL('index.html')
  })
});

