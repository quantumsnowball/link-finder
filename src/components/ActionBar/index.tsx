import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelectProgram } from '../../hooks/useSelect'


function ActionBar(): JSX.Element {
  const { program, setProgram, isValidProgram, allPrograms } = useSelectProgram()


  return (
    <>
      <FormControl
        size="small"
        sx={{
          margin: 2,
        }}>
        <InputLabel id="program">Program</InputLabel>
        <Select
          labelId="program-label"
          id="program"
          value={program}
          onChange={(e) => {
            if (isValidProgram(e.target.value))
              setProgram(e.target.value)
          }}
          input={<OutlinedInput label="Program" />}
        >
          {allPrograms.map((name) => (
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
