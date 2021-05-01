import { render } from '@testing-library/react';

import BouncingBall from './bouncing-ball';

describe('BouncingBall', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BouncingBall />);

    expect(baseElement).toBeTruthy();
  });
});
