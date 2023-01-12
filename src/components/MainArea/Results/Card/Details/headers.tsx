import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { FC } from "react"
import { Request, Response } from "../../../../../types"


type RendererProps = {
  title: string
  headers: chrome.webRequest.HttpHeader[] | undefined
}
const Renderer: FC<RendererProps> =
  ({ title, headers }) =>
    <TableContainer>
      <Table size='small' padding='none'>
        <TableHead>
          <TableRow>
            <TableCell
              align='center'
              colSpan={2}
              sx={{
                fontWeight: 'bold',
              }}>{title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {headers?.map(({ name, value }) =>
            <TableRow>
              <TableCell
                component='code'
                align='right'
                sx={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  pr: 1
                }}>{name}</TableCell>
              <TableCell
                component='code'
                align='left'
                sx={{
                  fontSize: 12
                }}>{value}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>



type HeadersProps = {
  request: Request | undefined,
  response: Response
}

const Headers: FC<HeadersProps> = ({ request, response }) => {
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
          flex: '1 1 auto',
          width: '50%'
        }}
      >
        <Renderer title='Requests Headers' headers={requestHeaders} />
      </Box>
      <Box
        sx={{
          flex: '1 1 auto',
          width: '50%'
        }}
      >
        <Renderer title='Response Headers' headers={responseHeaders} />
      </Box>
    </Box>
  )
}

export default Headers
