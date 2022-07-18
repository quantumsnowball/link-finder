import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { states } from '../App'
import { useContext } from 'react';
import { programs } from '../../types'



function ActionBar(): JSX.Element {
  const {
    program: { program, setProgram }
  } = useContext(states)

  return (
    <>
      <FormControl
        size="small"
        sx={{
          padding: 1
        }}>
        <InputLabel id="program">Program</InputLabel>
        <Select
          labelId="program-label"
          id="program"
          value={program}
          onChange={(e: SelectChangeEvent<string>) => setProgram(e.target.value)}
          input={<OutlinedInput label="Program" />}
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
