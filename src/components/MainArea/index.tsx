import { sharedProps } from '../App'
import { useContext } from "react";
import { Entry } from "../../types/App";
import ClearButton from "../ClearButton";
import Link from "./Link";


function MainArea() {
  const props = useContext(sharedProps)
  const { keyword } = props.keyword
  const { exclude } = props.exclude
  const { highlight } = props.highlight
  const { entries, setEntries } = props.entries

  return (
    <div className="main">
      {entries
        .filter((entry: Entry) => entry.url.match(keyword))
        .filter((entry: Entry) => exclude !== '' ? !entry.url.match(exclude) : true)
        .reverse()
        .map((entry: Entry, i: number) =>
          <Link key={i} keyword={keyword} exclude={exclude} highlight={highlight} title={entry.title} url={entry.url} method={entry.method} />)}
      <ClearButton setValue={setEntries} />
    </div>
  )
}

export default MainArea
