import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header title="Algorithm Playground" />);
    expect(baseElement).toBeTruthy();
  });

  it('Should have Algorithm Playground as title', () => {
    const title = 'Algorithm Playground';
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toBeTruthy();
  });
});
