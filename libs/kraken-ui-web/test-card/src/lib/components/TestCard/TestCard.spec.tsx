// COPYRIGHT JEFF KWOK

import { render, cleanup } from '@testing-library/react';

import TestCard from './test-card';

describe('TestCard', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<TestCard />);
    expect(baseElement).toBeTruthy();
  });
});
