import Highlighter from "react-highlight-words"
import { copyText } from '../../../utils/data'
import { methodChipStyle } from '../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import useAlert from "../../../hooks/useAlert"
import { useSelectProgram } from "../../../hooks/useSelect"
import { Button, Typography } from "@mui/material"
import { useState } from "react"


interface LinkProps {
  url: string
  title: string
  method: string
  requestId: string
}

function Link({ url, title, method, requestId }: LinkProps) {
  const { program } = useSelectProgram()
  const { alertSuccess, alertError } = useAlert()
  const highlight = useSelector((s: RootState) => s.input.highlight)
  const [expanded, setExpanded] = useState(false)

  return (
    <Paper
      elevation={24}
      sx={{ p: 1 }}
    >
      <Paper
        onClick={e => {
          if (e.shiftKey)
            copyText(url, alertSuccess, alertError)
          else
            copyText(`${program} "${url}" -o "${title}.mp4"`, alertSuccess, alertError)
          setExpanded(!expanded)
        }}
        sx={{
          '&:hover': { cursor: 'pointer' },
          display: 'flex',
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
        <Highlighter
          searchWords={[highlight]}
          textToHighlight={url}
        />
      </Paper>
      {expanded ?
        <Paper
          elevation={6}
          sx={{ p: 1 }}
        >
          <Typography>
            {requestId}: Some info about the response
          </Typography>
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
