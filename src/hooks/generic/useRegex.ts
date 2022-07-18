import React from 'react'
import { useState } from 'react'


export function useRegex(setValue: React.Dispatch<React.SetStateAction<string>>) {
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
