import { states } from '../../App'
import { Entry } from '../../../types'
import { useContext } from "react"
import Link from "./Link"


function Results() {
  const {
    keyword: { keyword },
    exclude: { exclude },
    entries: { entries }
  } = useContext(states)

  return (
    <>
      {entries
        .filter((entry: Entry) => entry.url.match(keyword))
        .filter((entry: Entry) => exclude !== '' ? !entry.url.match(exclude) : true)
        .reverse()
        .map((entry: Entry, i: number) =>
          <Link
            key={i}
            url={entry.url}
            title={entry.title}
            method={entry.method}
          />)}
    </>
  )
}

export default Results
