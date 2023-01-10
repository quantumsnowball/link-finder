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
        .map((request: Request) =>
          <Link
            key={request.uuid}
            {...request}
          />)}
    </>
  )
}

export default Results
