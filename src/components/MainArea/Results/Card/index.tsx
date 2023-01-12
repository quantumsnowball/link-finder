import Paper from '@mui/material/Paper'
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Response } from "../../../../types"
import UrlRow from './UrlRow'


const Card = (response: Response) => {
  const { requestId } = response
  const requests = useSelector((s: RootState) => s.output.requests)
  const request = requests.find(req => req.requestId === requestId)

  return (
    <Paper
      elevation={24}
      sx={{ p: 1 }}
    >
      <UrlRow {...{ request, response }} />
    </Paper>
  )
}

export default Card
