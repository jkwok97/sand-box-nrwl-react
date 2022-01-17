// COPYRIGHT JEFF KWOK

import { render, cleanup } from '@testing-library/react';

import Test123 from './Test123';

describe('Test123', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Test123 />);
    expect(baseElement).toBeTruthy();
  });
});
