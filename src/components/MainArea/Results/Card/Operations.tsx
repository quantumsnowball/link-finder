import { copyText } from '../../../../utils/data'
import useAlert from "../../../../hooks/useAlert"
import { Button } from "@mui/material"
import { FC } from "react"
import { Box } from "@mui/system"
import { Request, Response } from "../../../../types"


type Props = {
  request: Request | undefined,
  response: Response
}

const Operations: FC<Props> = ({ request, response }) => {
  const { url, title } = response
  const { alertSuccess, alertError } = useAlert()
  const curlHeaders = request?.requestHeaders?.map(m => `-H '${m.name}: ${m.value}'`).join(' ')

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} >
      <Button onClick={() => copyText(title, alertSuccess, alertError)} >title</Button>
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
  )
}

export default Operations

