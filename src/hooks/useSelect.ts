import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { PROGRAMS } from "../constants"
import { inputActions } from "../redux/slices/inputSlice"
import { RootState } from "../redux/store"
import { Program } from "../types"
import useLocalStorage from "./generic/useLocalStorage"


function useSelect<T>(key: string, VALUES: T[], initialValue: T) {
  const [value, setValue] = useLocalStorage(key, initialValue)

  const isValid = useCallback((name: any): name is T => {
    return VALUES.includes(name as T)
  }, [])

  return { value, setValue, isValid, VALUES }
}

export function useSelectProgram() {
  const dispatch = useDispatch()
  const allPrograms = PROGRAMS
  const [program, setProgram] = [
    useSelector((s: RootState) => s.input.program),
    (p: Program) => dispatch(inputActions.setProgram(p))
  ]
  const isValidProgram = useCallback((name: any): name is Program => allPrograms.includes(name), [])

  return { program, setProgram, isValidProgram, allPrograms }
}

export default useSelect
