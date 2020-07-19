import React from 'react';
import { Main } from '@components';
import ThemeRender from '@utils/testing';

describe('Main', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(
      <Main>
        <p>hello world</p>
      </Main>
    );
    expect(tree).toMatchSnapshot();
  });
});
