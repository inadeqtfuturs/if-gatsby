import React from 'react';
import { PageWrapper } from '@components';
import ThemeRender from '@utils/testing';

describe('Main', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(
      <PageWrapper>
        <p>hello world</p>
      </PageWrapper>
    );
    expect(tree).toMatchSnapshot();
  });
});
