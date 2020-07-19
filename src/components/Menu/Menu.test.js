import React from 'react';
import { Menu } from '@components';
import ThemeRender from '@utils/testing';

const mockItems = [
  { label: 'home', to: '/' },
  {
    label: 'nest',
    to: '/',
    subItems: [
      { label: 'one', to: '/' },
      { label: 'two', to: '/' }
    ]
  }
];

describe('Menu', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(<Menu menuItems={mockItems} />);
    expect(tree).toMatchSnapshot();
  });
});
