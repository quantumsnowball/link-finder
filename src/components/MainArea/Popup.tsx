import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import useAlert from '../../hooks/useAlert'


function Popup() {
  const { alert, alertContent } = useAlert()

  return (
    <>
      {
        alert === 'none' ? null :
          <Box sx={{
            position: 'fixed',
            bottom: 50,
            left: '50%',
            transform: "translateX(-50%)"
          }}>
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert
                variant="standard"
                severity={alert}
                sx={{
                  wordBreak: 'break-all',
                }}
              >
                <AlertTitle>{alertContent.title}</AlertTitle>
                {alertContent.message}
              </Alert>
            </Stack>
          </Box >
      }
    </>
  )
}

export default Popup
