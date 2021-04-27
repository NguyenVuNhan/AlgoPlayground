import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('Should have Algorithm Playground as title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Algorithm Playground')).toBeTruthy();
  });

  it('Should trigger onMenuClick event', async () => {
    const onMenuClick = jest.fn();
    const { findByTestId } = render(<Header onMenuClick={onMenuClick} />);
    const menuBtn = await findByTestId('menu-btn');
    menuBtn.click();
    expect(onMenuClick.mock.calls.length).toBe(1);
  });
});
