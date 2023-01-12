import { Box } from "@mui/material"
import { FC } from "react"
import { Request, Response } from "../../../../../types"


type Props = {
  request: Request | undefined,
  response: Response
}

const Headers: FC<Props> = ({ request, response }) => {
  const requestHeaders = request?.requestHeaders
  const responseHeaders = response.responseHeaders

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          flex: 1
        }}
      >
        {requestHeaders?.map(h => <span>{h.name}:{h.value}</span>)}
      </Box>
      <Box
        sx={{
          flex: 1
        }}
      >
        {responseHeaders?.map(h => <span>{h.name}:{h.value}</span>)}
      </Box>
    </Box>
  )
}

export default Headers
