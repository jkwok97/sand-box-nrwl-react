// COPYRIGHT JEFF KWOK

import { render, cleanup } from '@testing-library/react';

import Testing from './Testing';

describe('Testing', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Testing />);
    expect(baseElement).toBeTruthy();
  });
});
