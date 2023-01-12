import { Response } from '../../../types'
import Card from "./Card"
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'


function Results() {
  const responses = useSelector((s: RootState) => s.output.responses)
  const keyword = useSelector((s: RootState) => s.input.keyword)
  const exclude = useSelector((s: RootState) => s.input.exclude)

  return (
    <>
      {responses
        .filter((r: Response) => r.url.match(keyword))
        .filter((r: Response) => exclude !== '' ? !r.url.match(exclude) : true)
        .reverse()
        .map((response: Response) =>
          <Card
            key={response.uuid}
            {...response}
          />)}
    </>
  )
}

export default Results
