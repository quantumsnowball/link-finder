import { Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Response } from "../../../../types"
import Operations from './Operations'
import Summary from './Summary'
import Details from './Details'


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
      {expanded ?
        <Box sx={{ p: 1 }} >
          <Details {...{ request, response }} />
          <Operations {...{ request, response }} />
        </Box>
        : null}
    </Paper>
  )
}

export default Card
