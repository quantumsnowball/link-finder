import Highlighter from "react-highlight-words"
import { copyText } from '../../../utils/data'
import { methodChipStyle, statusChipStyle } from '../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import useAlert from "../../../hooks/useAlert"
import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { Box } from "@mui/system"
import { Response } from "../../../types"



function Link(response: Response) {
  const { url, title, method, requestId, statusCode, statusLine } = response
  const { alertSuccess, alertError } = useAlert()
  const highlight = useSelector((s: RootState) => s.input.highlight)
  const requests = useSelector((s: RootState) => s.output.requests)
  const request = requests.find(req => req.requestId === requestId)
  const [expanded, setExpanded] = useState(false)

  return (
    <Paper
      elevation={24}
      sx={{ p: 1 }}
    >
      <Paper
        onClick={() => {
          setExpanded(!expanded)
          console.log({ request })
          console.log({ response })
        }
        }
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
          </Box>
        </Box>
        : null
      }
    </Paper>
  )
}

export default Link
