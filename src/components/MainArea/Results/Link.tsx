import Highlighter from "react-highlight-words"
import { copyText } from '../../../utils/data'
import { methodChipStyle, statusChipStyle } from '../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import useAlert from "../../../hooks/useAlert"
import { Button } from "@mui/material"
import { useState } from "react"
import { Box } from "@mui/system"
import { Response } from "../../../types"



function Link(response: Response) {
  const { url, title, method, requestId, statusCode, responseHeaders } = response
  const { alertSuccess, alertError } = useAlert()
  const highlight = useSelector((s: RootState) => s.input.highlight)
  const requests = useSelector((s: RootState) => s.output.requests)
  const request = requests.find(r => r.requestId === requestId)
  const [expanded, setExpanded] = useState(false)

  console.log(response)

  return (
    <Paper
      elevation={24}
      sx={{ p: 1 }}
    >
      <Paper
        onClick={() => setExpanded(!expanded)}
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          fontFamily: ['source-code-pro', 'monospace'],
          wordBreak: 'break-all',
          backgroundColor: 'background.paper',
          margin: '0.2em',
          padding: '0.2em',
          fontSize: '1.2em',
          borderRadius: 'shape.borderRadius',
          userSelect: 'none'
        }}
      >
        <Chip
          label={method}
          color={methodChipStyle(method)}
          size="small"
          sx={{
            marginRight: 1
          }} />
        <Box
          sx={{
            flexGrow: 1
          }}
        >
          <Highlighter
            searchWords={[highlight]}
            textToHighlight={url}
          />
        </Box>
        <Chip
          label={statusCode}
          color={statusChipStyle(statusCode)}
          size="small"
          sx={{
            marginLeft: 1
          }}
        />
      </Paper>
      {expanded ?
        <Paper
          elevation={6}
          sx={{ p: 1 }}
        >
          <div>Request Headers</div>
          <div>
            {request?.requestHeaders?.map(h => <span>{h.name}: {h.value}</span>)}
          </div>
          <div>Response Headers</div>
          <div>
            {responseHeaders?.map(h => <span>{h.name}: {h.value}</span>)}
          </div>
          <Button onClick={() => copyText(url, alertSuccess, alertError)} >url</Button>
          <Button onClick={() => copyText(`youtube-dl "${url}" -o "${title}.mp4"`,
            alertSuccess, alertError)}>youtube-dl</Button>
          <Button onClick={() => copyText(`aria2c "${url}" -o "${title}.mp4"`,
            alertSuccess, alertError)}>aria2c</Button>
          <Button onClick={() => copyText(`wget "${url}"`,
            alertSuccess, alertError)}>wget</Button>
        </Paper>
        : null
      }
    </Paper>
  )
}

export default Link
