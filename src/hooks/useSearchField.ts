import { useRegex } from './generic/useRegex'
import useLocalStorage from './generic/useLocalStorage'


function useSearchField(key: string, initialValue: string) {
  const [text, setText] = useLocalStorage(key, initialValue)

  const setValidRegexText = useRegex(setText)

  return [text, setValidRegexText] as const
}

export default useSearchField
