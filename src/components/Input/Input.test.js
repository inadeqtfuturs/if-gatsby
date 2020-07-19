import React from 'react';
import { Input } from '@components';
import ThemeRender from '@utils/testing';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = ThemeRender(<Input name="test" />);
    expect(tree).toMatchSnapshot();
  });

  it('takes props', () => {
    const tree = ThemeRender(
      <Input
        label="name"
        name="name"
        placeholder="full name"
        size="lg"
        disabled
        required
        row
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays help text', () => {
    const tree = ThemeRender(
      <Input label="help" name="help" helpText="here's some help text" />
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays error state', () => {
    const tree = ThemeRender(
      <Input
        label="error"
        name="error"
        meta={{ touched: true, submitError: true, error: true }}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
