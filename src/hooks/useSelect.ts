import { useCallback } from "react";
import useLocalStorage from "./generic/useLocalStorage";


function useSelect<T>(key: string, VALUES: T[], initialValue: T) {
  const [value, setValue] = useLocalStorage(key, initialValue)

  const isValid = useCallback((name: any): name is T => {
    return VALUES.includes(name as T)
  }, [])

  return { value, setValue, isValid, VALUES }
}

export default useSelect
