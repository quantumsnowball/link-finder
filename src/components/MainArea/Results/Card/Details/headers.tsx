import { Box } from "@mui/material"


const Headers = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          flex: 1
        }}
      >
        Request Headers
      </Box>
      <Box
        sx={{
          flex: 1
        }}
      >
        Response Headers
      </Box>
    </Box>
  )
}

export default Headers
