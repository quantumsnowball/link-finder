import SearchField from './SearchField'
import Box from "@mui/material/Box"
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { inputActions } from '../../redux/slices/inputSlice'


function SearchBar() {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = [
    useSelector((s: RootState) => s.input.keyword),
    (s: string) => dispatch(inputActions.setKeyword(s))
  ]
  const [exclude, setExclude] = [
    useSelector((s: RootState) => s.input.exclude),
    (s: string) => dispatch(inputActions.setExclude(s))
  ]
  const [highlight, setHighlight] = [
    useSelector((s: RootState) => s.input.highlight),
    (s: string) => dispatch(inputActions.setHighlight(s))
  ]


  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%'
    }}>
      <SearchField
        value={keyword}
        label="Filter"
        setValue={setKeyword}
      />
      <SearchField
        value={exclude}
        label="Exclude"
        setValue={setExclude}
      />
      <SearchField
        value={highlight}
        label="Highlight"
        setValue={setHighlight}
      />
    </Box >
  )
}

export default SearchBar
