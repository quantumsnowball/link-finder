import Results from './Results'
import Container from '@mui/material/Container'
import ClearButton from "./ClearButton";
import ToggleThemeButton from "./ToggleThemeButton";


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
      <ClearButton />
      <ToggleThemeButton />
    </Container>
  )
}

export default MainArea
