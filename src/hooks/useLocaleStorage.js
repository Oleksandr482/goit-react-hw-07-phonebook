import { useState, useEffect } from 'react';

export const useLocaleStorage = defaultValue => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
