import React from 'react';
import styled from 'styled-components';
import { Styled, ThemeProvider } from 'theme-ui'
import { ThemeProvider as StyledProvider } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { theme } from '../src/components';

const StoryWrapper = styled.div`
  padding: 1rem;
`;

addDecorator(storyFn => (
  <StyledProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Styled.root>
        <StoryWrapper>
          {storyFn()}
        </StoryWrapper>
      </Styled.root>
    </ThemeProvider>
  </StyledProvider>
))

configure(require.context('../src', true, /\.stories\.js$/), module);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
