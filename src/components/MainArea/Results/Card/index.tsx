import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Response } from "../../../../types"
import Summary from './Summary'
import UrlDetails from './UrlDetails'


const Card = (response: Response) => {
  const { requestId } = response
  const requests = useSelector((s: RootState) => s.output.requests)
  const request = requests.find(req => req.requestId === requestId)
  const [expanded, setExpanded] = useState(false)

  return (
    <Paper
      elevation={24}
      sx={{ p: 1 }}
    >
      <Summary {...{ request, response, expanded, setExpanded }} />
      {expanded ? <UrlDetails {...{ request, response }} /> : null}
    </Paper>
  )
}

export default Card
