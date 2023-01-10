import Highlighter from "react-highlight-words"
import { copyText } from '../../../utils/data'
import { methodChipStyle } from '../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import useAlert from "../../../hooks/useAlert"
import { useSelectProgram } from "../../../hooks/useSelect"


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

  return (
    <Paper
      onClick={e => {
        if (e.shiftKey)
          copyText(url, alertSuccess, alertError)
        else
          copyText(`${program} "${url}" -o "${title}.mp4"`, alertSuccess, alertError)
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
      elevation={24}
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
  )
}

export default Link
