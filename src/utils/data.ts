import { Entry, AlertMessage } from '../types'


export function copyText(text: string, alertSuccess: (m: AlertMessage) => void) {
  navigator.clipboard.writeText(text).then(function() {
    alertSuccess({
      title: 'Success: copied to clipboard',
      message: text
    });
  }, function(err) {
    alert(`Async: Could not copy text: ${err}`);
  });
}

function makeInitialEntries() {
  if (process.env.NODE_ENV === 'production') {
    return [] as Entry[]
  } else {
    return Array.from(Array(50).keys()).map(_ =>
      ({ title: 'Title', url: Math.random().toString(36).repeat(20), method: 'GET' }))
  }
}

export const initialEntries = makeInitialEntries()
