import Highlighter from "react-highlight-words";
import { states } from '../../App'
import { copyText } from '../../../utils/data'
import { useContext } from 'react';
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip';


interface LinkProps {
  url: string
  title: string
  method: string
}

function Link({ url, title, method }: LinkProps) {
  const {
    highlight: { highlight }
  } = useContext(states)

  return (
    <Paper
      onClick={_ => copyText(
        `youtube-dl "${url}" -o "${title}.mp4"`
      )}
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
        borderRadius: 'shape.borderRadius'
      }}
      elevation={24}
    >
      <Chip
        label={method}
        variant="outlined"
        color="primary"
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
