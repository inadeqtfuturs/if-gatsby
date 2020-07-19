import React from 'react';
import { Radio } from '@components';
import ThemeRender from '@utils/testing';

const mockItems = [
  { name: 'home', value: '/' },
  { name: 'nest', value: '/' }
];

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(
      <Radio label="test" name="test" options={mockItems} />
    );
    expect(tree).toMatchSnapshot();
  });
});
