import { render } from '@testing-library/react';

import SimulationPhysics from './simulation-physics';

describe('SimulationPhysics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimulationPhysics />);
    expect(baseElement).toBeTruthy();
  });
});
