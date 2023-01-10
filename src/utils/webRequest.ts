import { v4 } from 'uuid'
import { Request } from '../types'


type RequestLogger = (element: Request) => void

export default function requestLogger(pushRequest: RequestLogger) {
  return () => {
    // register web request listenering on first mount
    chrome.webRequest && chrome.webRequest.onHeadersReceived.addListener(
      // for every request being sent, use details to do as follows:
      details => {
        // query all opened tab, then find title by id
        chrome.tabs.query({}, tabs => {
          const found = tabs.find(tab => tab.id === details.tabId)
          const title = found && found.title ? found.title : 'n.a.'
          pushRequest({
            uuid: v4(),
            title: title,
            ...details
          })
        })
      },
      // apply to all url being sent
      { urls: ['<all_urls>'] },
    )
  }
}
