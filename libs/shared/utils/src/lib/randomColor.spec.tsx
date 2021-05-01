import { render } from '@testing-library/react';

import randomColor from './randomColor';

describe('SharedUtils', () => {
  it('should generate random color', () => {
    const color = randomColor();
    expect(color).toMatch(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
  });
});
