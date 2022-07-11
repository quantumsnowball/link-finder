import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const setValidValue = regex => {
    try {
      new RegExp(regex)
      setValue(regex)
    } catch (error) { }
  }

  return [value, setValidValue];
}

