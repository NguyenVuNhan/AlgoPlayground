import React from 'react';
export function useInterval(callback, delay) {
  const intervalRef = React.useRef<number>();
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );

      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  return intervalRef;
}

export default useInterval;
