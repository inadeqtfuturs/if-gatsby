import React from 'react';
import { Header } from '@components';
import ThemeRender from '@utils/testing';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(
      <Header>
        <p>hello world</p>
      </Header>
    );
    expect(tree).toMatchSnapshot();
  });
});
