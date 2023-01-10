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
        .filter((r: Request) => r.url.match(keyword))
        .filter((r: Request) => exclude !== '' ? !r.url.match(exclude) : true)
        .reverse()
        .map((r: Request) =>
          <Link
            key={r.requestId}
            url={r.url}
            title={r.title}
            method={r.method}
            requestId={r.requestId}
            timeStamp={r.timeStamp}
          />)}
    </>
  )
}

export default Results
