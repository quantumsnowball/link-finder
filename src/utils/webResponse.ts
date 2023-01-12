import { v4 } from 'uuid'
import { Response } from '../types'


type ResponseLogger = (element: Response) => void

export default function listenToResponses(pushResponse: ResponseLogger) {
  // register web response listenering on first mount
  chrome.webRequest && chrome.webRequest.onHeadersReceived.addListener(
    // for every response being received, use details to do as follows:
    details => {
      // query all opened tab, then find title by id
      chrome.tabs.query({}, tabs => {
        const found = tabs.find(tab => tab.id === details.tabId)
        const title = found && found.title ? found.title : 'n.a.'
        pushResponse({
          uuid: v4(),
          title: title,
          ...details
        })
      })
    },
    // apply to all url being sent
    { urls: ['<all_urls>'] },
    ['responseHeaders']
  )
}
