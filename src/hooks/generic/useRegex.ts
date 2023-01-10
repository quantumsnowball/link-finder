import { useState } from 'react'


export function useRegex(setValue: (s: string) => void) {
  const [isValidRegex, setIsValidRegex] = useState(true)

  function setValidRegex(regex: string) {
    try {
      new RegExp(regex)
      setValue(regex)
      setIsValidRegex(true)
    } catch {
      setIsValidRegex(false)
    }
  }

  return { isValidRegex, setValidRegex }
}
