import { useState } from 'react';

function useRegex(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function setValidValue(regex: string) {
    try {
      new RegExp(regex)
      setValue(regex)
    } catch (error) {
      setValue(value)
    }
  }

  return [value, setValidValue] as const;
}

export default useRegex;
