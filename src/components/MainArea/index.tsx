import { states } from '../App'
import { useContext } from "react";
import { Entry } from "../../types";
import ClearButton from "./ClearButton";
import Link from "./Link";


function MainArea() {
  const {
    keyword: { keyword },
    exclude: { exclude },
    entries: { entries }
  } = useContext(states)

  return (
    <div className="main">
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
      <ClearButton />
    </div>
  )
}

export default MainArea
