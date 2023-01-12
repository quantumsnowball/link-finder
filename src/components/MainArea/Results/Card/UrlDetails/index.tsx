import { copyText } from '../../../../../utils/data'
import useAlert from "../../../../../hooks/useAlert"
import { Button, Typography } from "@mui/material"
import { FC } from "react"
import { Box } from "@mui/system"
import { Request, Response } from "../../../../../types"


type Props = {
  request: Request | undefined,
  response: Response
}

const UrlDetails: FC<Props> = ({ request, response }) => {
  const { url, title, requestId, statusLine } = response
  const { alertSuccess, alertError } = useAlert()
  const curlHeaders = request?.requestHeaders?.map(m => `-H '${m.name}: ${m.value}'`).join(' ')

  return (
    <Box
      sx={{ p: 1 }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} >
        <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-start' }}>
          <Typography variant="body2"> {requestId} </Typography></Box>
        <Box sx={{ display: "flex", flex: 8, justifyContent: 'center' }}>
          <Typography variant="h6"> {title} </Typography></Box>
        <Box sx={{ display: "flex", flex: 1, justifyContent: 'flex-end' }}>
          <Typography variant="body2"> {statusLine} </Typography></Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} >
        <Button onClick={() => copyText(url, alertSuccess, alertError)} >url</Button>
        <Button onClick={() => copyText(`youtube-dl "${url}" -o "${title}.mp4"`,
          alertSuccess, alertError)}>youtube-dl</Button>
        <Button onClick={() => copyText(`aria2c "${url}" -o "${title}.mp4"`,
          alertSuccess, alertError)}>aria2c</Button>
        <Button onClick={() => copyText(`wget "${url}"`,
          alertSuccess, alertError)}>wget</Button>
        <Button onClick={() => copyText(`curl "${url}" ${curlHeaders}`,
          alertSuccess, alertError)}>curl</Button>
      </Box>
    </Box>
  )
}

export default UrlDetails
