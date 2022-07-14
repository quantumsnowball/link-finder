import { Entry, AlertMaker } from '../types'


export function copyText(
  text: string, alertSuccess: AlertMaker, alertError: AlertMaker) {
  navigator.clipboard.writeText(text).then(
    () => alertSuccess({
      title: 'Success: copied to clipboard',
      message: text
    }),
    err => alertError({
      title: 'Error: failed to copy to clipboard',
      message: err.toString()
    })
  )
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
