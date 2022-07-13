import { sharedProps } from '../App'
import { useContext } from "react";
import { Entry } from "../../types";
import ClearButton from "./ClearButton";
import Link from "./Link";


function MainArea() {
  const {
    keyword: { keyword },
    exclude: { exclude },
    highlight: { highlight },
    entries: { entries }
  } = useContext(sharedProps)

  return (
    <div className="main">
      {entries
        .filter((entry: Entry) => entry.url.match(keyword))
        .filter((entry: Entry) => exclude !== '' ? !entry.url.match(exclude) : true)
        .reverse()
        .map((entry: Entry, i: number) =>
          <Link key={i} keyword={keyword} exclude={exclude} highlight={highlight} title={entry.title} url={entry.url} method={entry.method} />)}
      <ClearButton />
    </div>
  )
}

export default MainArea
