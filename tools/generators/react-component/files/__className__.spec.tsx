// COPYRIGHT JEFF KWOK

import { render, cleanup } from '@testing-library/react';

import <%= className %> from './<%= fileName %>';

describe('<%= className %>', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<<%= className %> />);
    expect(baseElement).toBeTruthy();
  });
});
