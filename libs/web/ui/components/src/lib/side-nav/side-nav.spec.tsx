import { render } from '@testing-library/react';

import SideNav from './side-nav';

describe('SideNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideNav open />);
    expect(baseElement).toBeTruthy();
  });

  it('should able to open and close', () => {
    const { container, rerender } = render(<SideNav open />);
    let classList = container.firstElementChild.classList;
    expect(classList.contains('w-0')).toBeFalsy();
    expect(classList.contains('w-screen')).toBeTruthy();

    rerender(<SideNav open={false} />);
    classList = container.firstElementChild.classList;
    expect(classList.contains('w-screen')).toBeFalsy();
    expect(classList.contains('w-0')).toBeTruthy();
  });
});
