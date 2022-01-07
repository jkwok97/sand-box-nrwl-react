import { render } from '@testing-library/react';

import KrakenUiWebTestButton from './KrakenUiWebTestButton';

describe('KrakenUiWebTestButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KrakenUiWebTestButton />);
    expect(baseElement).toBeTruthy();
  });
});
