import { Response } from '../types'


type ResponseLogger = (element: Response) => void

export default function responseLogger(pushResponse: ResponseLogger) {
  return () => {
    // register web response listenering on first mount
    chrome.webRequest && chrome.webRequest.onResponseStarted.addListener(
      // for every response being received, use details to do as follows:
      details => {
        // log all response
        pushResponse({
          ...details
        })
      },
      // apply to all url being sent
      { urls: ['<all_urls>'] }
    )
  }
}
