import { Entry } from '../types'


function makeInitialEntries() {
  if (process.env.NODE_ENV === 'production') {
    return [] as Entry[]
  } else {
    return Array.from(Array(50).keys()).map(_ =>
      ({ title: 'Title', url: Math.random().toString(36).repeat(20), method: 'GET' }))
  }
}

export const initialEntries = makeInitialEntries()
