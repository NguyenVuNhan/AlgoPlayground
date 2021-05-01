import { act, render, waitFor } from '@testing-library/react';
import { useState } from 'react';

import SharedWebHooks, { useInterval } from './useInterval';

const UseIntervalTestComponent = () => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 50);
  return <div data-testid="counter">{count}</div>;
};

describe('Use Interval Hook', () => {
  it('should trigger every 50ms', async () => {
    jest.useFakeTimers();
    const { findByTestId } = render(<UseIntervalTestComponent />);
    act(() => {
      jest.advanceTimersByTime(500);
    });
    const counter = await findByTestId('counter');
    await waitFor(() => {
      expect(counter.textContent).toEqual('10');
    });
  });
});
