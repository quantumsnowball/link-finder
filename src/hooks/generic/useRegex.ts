import React from 'react';


export function useRegex(setValue: React.Dispatch<React.SetStateAction<string>>) {
  function setValidRegex(regex: string) {
    try {
      new RegExp(regex)
      setValue(regex)
    } catch { }
  }

  return setValidRegex
}
