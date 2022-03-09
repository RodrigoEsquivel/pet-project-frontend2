import * as React from 'react';
import { render } from '@testing-library/react';

import { SignUpPage } from '..';

describe('<SignUpPage  />', () => {
  const routeComponentProps = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  };
  it('should match snapshot', () => {
    const loadingIndicator = render(<SignUpPage {...routeComponentProps} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
