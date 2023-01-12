import { Typography } from "@mui/material"
import { FC, useState } from "react"
import { Box } from "@mui/system"
import { Request, Response } from "../../../../../types"
import Headers from "./headers"


type Props = {
  request: Request | undefined,
  response: Response
}

const Details: FC<Props> = ({ request, response }) => {
  const { title, requestId, statusLine } = response
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
          <Typography variant="body2"> {requestId} </Typography></Box>
        <Box sx={{ display: "flex", flex: 8, justifyContent: 'center' }}>
          <Typography variant="h6"> {title} </Typography></Box>
        <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-end' }}>
          <Typography variant="body2"> {statusLine} </Typography></Box>
      </Box>
      {expanded ? <Headers {...{ request, response }} /> : null}
    </>
  )
}

export default Details
