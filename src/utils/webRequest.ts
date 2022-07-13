import { Entry } from '../types'


type EntryLogger = (element: Entry) => void

export default function requestLogger(pushEntry: EntryLogger) {
  return () => {
    // register web request listenering on first mount
    chrome.webRequest && chrome.webRequest.onBeforeRequest.addListener(
      // for every request being sent, use details to do as follows:
      details => {
        // query all opened tab, then find title by id
        chrome.tabs.query({}, tabs => {
          const found = tabs.find(tab => tab.id === details.tabId)
          const title = found && found.title ? found.title : 'n.a.'
          pushEntry({ title: title, url: details.url, method: details.method })
        })
      },
      // apply to all url being sent
      { urls: ['<all_urls>'] }
    )
  }
}
