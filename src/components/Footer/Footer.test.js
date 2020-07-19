import React from 'react';
import { Footer } from '@components';
import ThemeRender from '@utils/testing';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(
      <Footer>
        <p>hello world</p>
      </Footer>
    );
    expect(tree).toMatchSnapshot();
  });
});
