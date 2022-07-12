import { useState } from 'react';

function useArray<T>(initialValue: T[]) {
  const [value, setValue] = useState(initialValue);

  function push(element: T) {
    setValue(oldValue => [...oldValue, element]);
  };

  function remove(index: number) {
    setValue(oldValue => oldValue.filter((_, i) => i !== index));
  };

  function isEmpty() {
    return value.length === 0;
  }

  return { value, setValue, push, remove, isEmpty };
}

export default useArray;
