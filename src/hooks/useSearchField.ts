import { useRegex } from './generic/useRegex'
import useLocalStorage from './generic/useLocalStorage'


function useSearchField(key: string, initialValue: string) {
  const [text, setText] = useLocalStorage(key, initialValue)

  const { isValidRegex, setValidRegex } = useRegex(setText)

  return [text, isValidRegex, setValidRegex] as const
}

export default useSearchField
