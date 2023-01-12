import Highlighter from "react-highlight-words"
import { methodChipStyle, statusChipStyle } from '../../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Dispatch, FC, SetStateAction } from "react"
import { Box } from "@mui/system"
import { Request, Response } from "../../../../types"


type Props = {
  request: Request | undefined,
  response: Response,
  expanded: boolean,
  setExpanded: Dispatch<SetStateAction<boolean>>
}

const Summary: FC<Props> = ({ request, response, expanded, setExpanded }) => {
  const { url, method, statusCode } = response
  const highlight = useSelector((s: RootState) => s.input.highlight)

  return (
    <Paper
      onClick={() => {
        setExpanded(!expanded)
        console.log({ request })
        console.log({ response })
      }}
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
  )
}

export default Summary
