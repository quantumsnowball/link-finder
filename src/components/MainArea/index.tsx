import Results from './Results'
import Container from '@mui/material/Container'
import Popup from "./Popup"


function MainArea() {
  return (
    <Container
      className='main'
      maxWidth={false}
      disableGutters={true}
      sx={{
        flexGrow: 1,
        textAlign: 'left',
        overflow: 'auto'
      }}
    >
      <Results />
      <Popup />
    </Container>
  )
}

export default MainArea
