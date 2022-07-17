import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { states } from '../App'
import { useContext } from 'react';



function ActionBar(): JSX.Element {
  const {
    program: { program, setProgram }
  } = useContext(states)

  const programs = [
    'youtube-dl',
    'aria2c'
  ]

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={program}
          onChange={(e: SelectChangeEvent<string>) => setProgram(e.target.value)}
          input={<OutlinedInput label="Name" />}
        >
          {programs.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default ActionBar
