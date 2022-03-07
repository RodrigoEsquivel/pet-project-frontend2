import * as React from 'react';
import { render } from '@testing-library/react';

import { LoginPage } from '..';

describe('<LoginPage  />', () => {
  const routeComponentProps = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  };
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoginPage {...routeComponentProps} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
