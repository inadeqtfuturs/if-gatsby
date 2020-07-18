import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Branding,
  Header,
  Footer,
  Main,
  Menu,
  PageWrapper,
  theme
} from '@components';

function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              label
              to
            }
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header>
          <Branding />
          <Menu menuItems={site.siteMetadata.menu} />
        </Header>
        <Main>{children}</Main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
