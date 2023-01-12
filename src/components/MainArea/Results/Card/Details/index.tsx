import { Typography } from "@mui/material"
import { FC } from "react"
import { Box } from "@mui/system"
import { Response } from "../../../../../types"


type Props = {
  response: Response
}

const Details: FC<Props> = ({ response }) => {
  const { title, requestId, statusLine } = response

  return (
    <Box sx={{ display: "flex", alignItems: "center" }} >
      <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
        <Typography variant="body2"> {requestId} </Typography></Box>
      <Box sx={{ display: "flex", flex: 8, justifyContent: 'center' }}>
        <Typography variant="h6"> {title} </Typography></Box>
      <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-end' }}>
        <Typography variant="body2"> {statusLine} </Typography></Box>
    </Box>
  )
}

export default Details
