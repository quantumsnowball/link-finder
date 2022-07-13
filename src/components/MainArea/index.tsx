import { states } from '../App'
import { useContext } from "react";
import { Entry } from "../../types";
import Container from '@mui/material/Container'
import ClearButton from "./ClearButton";
import ToggleThemeButton from "./ToggleThemeButton";
import Link from "./Link";


function MainArea() {
  const {
    keyword: { keyword },
    exclude: { exclude },
    entries: { entries }
  } = useContext(states)

  return (
    <Container
      className='main'
      maxWidth={false}
      disableGutters={true}
      sx={{
        flexGrow: 1,
        color: 'white',
        textAlign: 'left',
        overflow: 'auto'
      }}
    >
      {entries
        .filter((entry: Entry) => entry.url.match(keyword))
        .filter((entry: Entry) => exclude !== '' ? !entry.url.match(exclude) : true)
        .reverse()
        .map((entry: Entry, i: number) =>
          <Link
            key={i}
            url={entry.url}
            title={entry.title}
            method={entry.method}
          />)}
      <ClearButton />
      <ToggleThemeButton />
    </Container>
  )
}

export default MainArea
