import Highlighter from "react-highlight-words"
import { methodChipStyle, statusChipStyle } from '../../../../styles/theme'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { FC, useState } from "react"
import { Box } from "@mui/system"
import { Request, Response } from "../../../../types"
import UrlDetails from "./UrlDetails"


type Props = {
  request: Request | undefined,
  response: Response
}

const UrlRow: FC<Props> = ({ request, response }) => {
  const { url, method, statusCode } = response
  const highlight = useSelector((s: RootState) => s.input.highlight)
  const [expanded, setExpanded] = useState(false)

  return (
    <>
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
      {expanded ? <UrlDetails {...{ request, response }} /> : null}
    </>
  )
}

export default UrlRow
