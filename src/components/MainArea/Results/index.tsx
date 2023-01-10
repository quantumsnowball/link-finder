import { states } from '../../App'
import { Entry } from '../../../types'
import { useContext } from "react"
import Link from "./Link"
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'


function Results() {
  const {
    entries: { entries }
  } = useContext(states)
  const keyword = useSelector((s: RootState) => s.input.keyword)
  const exclude = useSelector((s: RootState) => s.input.exclude)

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
