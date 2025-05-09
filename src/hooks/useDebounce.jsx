import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timer = useRef(null);

  const debouncedFunction = useCallback((...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedFunction;
};

export default useDebounce;