import { Request } from '../../../types'
import Link from "./Link"
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'


function Results() {
  const requests = useSelector((s: RootState) => s.output.requests)
  const keyword = useSelector((s: RootState) => s.input.keyword)
  const exclude = useSelector((s: RootState) => s.input.exclude)

  return (
    <>
      {requests
        .filter((entry: Request) => entry.url.match(keyword))
        .filter((entry: Request) => exclude !== '' ? !entry.url.match(exclude) : true)
        .reverse()
        .map((entry: Request, i: number) =>
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
